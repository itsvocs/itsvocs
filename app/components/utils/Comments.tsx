"use client";
import React, { useEffect, useState } from "react";
import {
  ArrowUturnLeftIcon,
  CheckBadgeIcon,
  InformationCircleIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import db from "@/config/firebase";
import { SubmitHandler, useForm } from "react-hook-form";
import MessageSent from "../lottie/MessageSent";
import Loading from "../lottie/Loading";
import { IoSend } from "react-icons/io5";

const reaction = [
  { emoji: "😕", id: "mauvais" },
  { emoji: "😐", id: "pas-mauvais" },
  { emoji: "😀", id: "bien" },
  { emoji: "🤩", id: "tres-bien" },
];

interface Comment {
  id: string;
  pseudo: string;
  feedback: string;
  comment: string;
  timestamp: Date;
  replies: ReplyComment[];
}
interface ReplyComment {
  pseudo: string;
  comment: string;
  timestamp: Date;
}

interface CommentFormData {
  pseudo: string;
  email: string;
  feedback: string;
  comment: string;
  reply: {
    [commentId: string]: ReplyComment;
  };
}

interface CommentSectionProps {
  slug: string;
}

function getFirstLetters(name: string): string {
  const words: string[] = name?.split(" ");
  const firstLetters: string[] = words.map((word) => word.charAt(0));
  return firstLetters.join("");
}

const Comments: React.FC<CommentSectionProps> = ({ slug }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<CommentFormData>();

  const {
    register: register2,
    formState: { errors: errors2 },
    handleSubmit: handleSubmit2,
    reset: resetReply,
  } = useForm<CommentFormData>();
  const [comments, setComments] = useState<Comment[]>([]);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [loadingReplay, setLoadingReplay] = useState(false);
  const [msgSent, setMsgSent] = useState(false);
  const [rplySent, setRplySent] = useState(false);
  const [replyShow, setReplyShow] = useState<{ [commentId: string]: boolean }>(
    {}
  );

  const id = slug;

  useEffect(() => {
    const fetchComments = async () => {
      const commentsQuery = query(
        collection(db, "comments"),
        where("id", "==", id),
        orderBy("timestamp", "desc")
      );

      const unsubscribe = onSnapshot(
        commentsQuery,
        (snapshot) => {
          const commentsData: Comment[] = snapshot.docs.map((doc) => ({
            id: doc.id,
            pseudo: doc.data().pseudo,
            comment: doc.data().comment,
            feedback: doc.data().feedback,
            timestamp: doc.data().timestamp.toDate(),
            replies: doc.data().replies || [],
          }));
          setComments(commentsData);
        },
        (error) => {
          console.error(error);
        }
      );

      return () => unsubscribe();
    };

    fetchComments();
  }, [id]);

  const onSubmit: SubmitHandler<CommentFormData> = async (data) => {
    const { pseudo, comment, email } = data;

    const feedback = selectedOption;
    setLoading(true);
    if (!pseudo || !comment || !feedback) {
      setLoading(false);
      return;
    }

    const newComment = {
      pseudo,
      comment,
      email,
      feedback,
      timestamp: new Date(),
      id,
      replies: [],
    };
    try {
      await addDoc(collection(db, "comments"), newComment);

      setSelectedOption("");
      setLoading(false);
      setMsgSent(true);
      reset();
      const timeout = setTimeout(() => {
        setMsgSent(false);
      }, 5000);
      return () => clearTimeout(timeout);
    } catch (error) {
      console.error(
        "Une erreur s'est produite lors de l'ajout du commentaire :",
        error
      );
      setLoading(false);
    }
  };

  const handleOptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSelectedOption(event.target.value);
  };

  const onSubmitReply = async (parentId: string, data: CommentFormData) => {
    setLoadingReplay(true);
    const { reply } = data;

    console.log(reply);

    // Vérifiez si les champs pseudo et commentaire sont renseignés
    if (!reply[parentId]?.pseudo || !reply[parentId]?.comment) {
      setLoadingReplay(false);
      return;
    }

    const newReply: ReplyComment = {
      pseudo: reply[parentId]?.pseudo,
      comment: reply[parentId]?.comment,
      timestamp: new Date(),
    };

    // Recherchez le commentaire parent dans le tableau de commentaires
    const updatedComments = comments.map((comment) => {
      if (comment.id === parentId) {
        // Ajoutez la réponse au tableau de sous-commentaires du commentaire parent
        return {
          ...comment,
          replies: [...comment.replies, newReply],
        };
      }
      return comment;
    });

    setComments(updatedComments);

    try {
      const commentDocRef = doc(db, "comments", parentId);
      await updateDoc(commentDocRef, {
        replies: arrayUnion(newReply),
      });

      setLoadingReplay(false);
      setRplySent(true);
      const timeout = setTimeout(() => {
        setRplySent(false);
        setReplyShow({ ...replyShow, replyShow: false });
      }, 3000);

      return () => clearTimeout(timeout);
    } catch (error) {
      console.error(
        "Une erreur s'est produite lors de l'enregistrement de la réponse :",
        error
      );
      setLoading(false);
    }

    resetReply();
  };

  console.log(errors2);

  return (
    <>
      <div className="not-prose flex w-full items-center justify-center my-12 border-y border-y-white/20 flex-col ">
        <p className=" text-slate-200 pt-10 pb-5">
          Cet article vous a t'il été utile?
        </p>
        <div className="flex flex-col max-w-sm w-full items-center overflow-hidden pb-10">
          <div className="flex space-x-8">
            {reaction.map((i) => (
              <label
                htmlFor={i.id}
                key={i.id}
                className={`${
                  selectedOption === i.id
                    ? "scale-[1.3]"
                    : "scale-100 grayscale-[90%]"
                } cursor-pointer hover:scale-150 duration-700 transition-all text-2xl  hover:grayscale-0`}>
                {i.emoji}
                <input
                  type="radio"
                  value={i.id}
                  checked={selectedOption === i.id}
                  onChange={handleOptionChange}
                  name="reaction"
                  id={i.id}
                  className="hidden"
                />
              </label>
            ))}
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={`w-full space-y-4 transition-all duration-500 ease-in-out  ${
              selectedOption.length > 0
                ? "h-[480px] "
                : " h-0 overflow-y-hidden"
            }`}>
            <div className="">
              <label
                htmlFor="pseudo"
                className="block text-sm leading-6 text-slate-300">
                Pseudo
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <input
                  type="text"
                  id="pseudo"
                  autoFocus
                  className={`input ${errors.pseudo && "!ring-red-500/60"} `}
                  {...register("pseudo", { required: true })}
                  placeholder="@itsvocs"
                />
                <span className="error-input">
                  {errors.pseudo && "Ce champ est nécessaire pour continuer."}
                </span>
              </div>
            </div>
            <div className="">
              <div className="flex justify-between text-sm leading-6 text-slate-300 relative">
                <label htmlFor="email">Email</label>
                <Link
                  href="/privacy-policy#information"
                  className="text-slate-300/30 flex items-center group hover:text-slate-300/90">
                  optionel{" "}
                  <InformationCircleIcon className="h-4 ml-1 group-hover:text-indigo-500/80" />{" "}
                </Link>
              </div>
              <div className="relative mt-2 rounded-md shadow-sm">
                <input
                  type="text"
                  id="email"
                  className="input"
                  placeholder="Entrer votre email..."
                  {...register("email")}
                />
              </div>
            </div>
            <div className="">
              <label
                htmlFor="comment"
                className="block text-sm leading-6 text-slate-300">
                Commentaire
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <textarea
                  autoComplete="on"
                  id="comment"
                  placeholder="Partagez votre avis..."
                  {...register("comment", { required: true })}
                  className={`resize-none input ${
                    errors.comment && "!ring-red-500/60"
                  } `}></textarea>
                <span className="error-input">
                  {errors.comment && "Ce champ est nécessaire pour continuer."}
                </span>
              </div>
            </div>
            <div className="flex items-center w-full justify-end">
              {loading ? (
                <Loading />
              ) : (
                <button
                  type="submit"
                  className=" bg-indigo-600 mt-2 hover:bg-indigo-400 transition-colors text-slate-50 text-sm rounded-md shadow p-2 py-1 ">
                  Publier
                </button>
              )}
            </div>
            <p className="text-slate-300/60 text-xs">
              Pensez à respecter{" "}
              <Link href="/terms-conditions#comment&chat" className="link">
                nos conditions d'utilisations.
              </Link>
            </p>
          </form>
          {msgSent && <MessageSent />}
        </div>
      </div>
      {comments.map((comment) => (
        <div key={comment.id} className="">
          <div>
            <div className="mt-6 flex items-center text-left">
              <div className="group flex items-center">
                <div className="ltr:ml-3 rtl:mr-3">
                  <p className="text-base  text-white font-medium flex items-center capitalize">
                    <span className="text-xl mr-1 mt-px">
                      {comment.feedback === "mauvais"
                        ? "😕"
                        : comment.feedback === "pas-mauvais"
                        ? "😐"
                        : comment.feedback === "bien"
                        ? "😀"
                        : "🤩"}
                    </span>
                    <span className="opacity-40 text-sm">@</span>
                    {comment.pseudo}
                  </p>
                  <p className="text-base/7 pl-6 text-slate-300 pb-1 -mt-2">
                    {comment.comment}
                  </p>

                  <div className="text-sm ml-6 border-l-2  border-l-slate-900 pl-4 ">
                    {comment.replies.map((reply) => (
                      <div key={reply.comment} className="reply">
                        <div className="flex items-center">
                          <span className="h-8 w-8 mr-1 bg-indigo-500/20 uppercase rounded-full flex justify-center items-center text-sm text-slate-200 font-semibold">
                            {getFirstLetters(reply.pseudo)}{" "}
                          </span>

                          <span className="opacity-40 text-white text-sm">
                            @
                          </span>
                          <strong>{reply.pseudo}</strong>
                          {reply.pseudo === "itsvocs" ? (
                            <CheckBadgeIcon className="w-4 text-indigo-500" />
                          ) : (
                            ""
                          )}
                        </div>
                        <p className="pl-10 text-sm">{reply.comment}</p>
                      </div>
                    ))}
                    {replyShow[comment.id] && (
                      <form
                        className="flex sm:gap-x-3 gap-y-4 w-full sm:flex-row flex-col"
                        onSubmit={handleSubmit2((data) =>
                          onSubmitReply(comment.id, data)
                        )}>
                        <input
                          type="text"
                          placeholder="Pseudo"
                          className={`input sm:w-[37%] w-full ${
                            errors2.reply?.[comment.id]?.pseudo &&
                            "!ring-red-500/60"
                          } `}
                          {...register2(`reply.${comment.id}.pseudo`, {
                            validate: (value) => value !== "itsvocs",
                          })}
                        />
                        <input
                          type="text"
                          placeholder="Votre réponse"
                          className="input w-full"
                          {...register2(`reply.${comment.id}.comment`)}
                        />

                        {loadingReplay ? (
                          <Loading />
                        ) : rplySent ? (
                          <span className="pt-[10px] text-indigo-400/70 italic text-sm">
                            envoyé
                          </span>
                        ) : (
                          <button
                            type="submit"
                            className="py-1 justify-end inline-flex sm:block text-indigo-500 cursor-default text-xl hover:text-indigo-400 transition-colors">
                            <IoSend />
                          </button>
                        )}
                      </form>
                    )}
                    {errors2.reply?.[comment.id]?.pseudo && (
                      <span className="error-input">
                        Vous ne pouvez pas utiliser ce Pseudo.
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() =>
                      setReplyShow({ ...replyShow, [comment.id]: true })
                    }
                    className={`text-indigo-400 hover:text-indigo-300 opacity-0 group-hover:opacity-100 transition-opacity hover:underline duration-700 flex items-center ml-6 -mt-2 ${
                      replyShow[comment.id] && "hidden"
                    }`}>
                    Répondre <ArrowUturnLeftIcon className="w-5 h-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Comments;
