"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface CompanionCardprops {
  name: string;
  id: string;
  topic: string;
  subject: string;
  duration: number;
  color: string;
}

const CompanionCard = ({
  id,
  name,
  topic,
  subject,
  duration,
  color,
}: CompanionCardprops) => {

   const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleStartLesson = () => {
    setLoading(true);
    router.push(`/companions/${id}`);
  };
  return (
    <article className="companion-card" style={{ background: color }}>
      <div className="flex justify-between items-center">
        <div className="subject-badge">{subject}</div>
        <button className="companion-bookmark">
          <Image
            src="/icons/bookmark.svg"
            height={15}
            alt="mark"
            width={12.5}
          />
        </button>
      </div>
      <h2 className="text-2xl font-bold"> {name}</h2>
      <p className="text-sm">{topic}</p>
      <div className="flex items-center gap-2 ">
        <Image
          src="/icons/clock.svg"
          height={13.5}
          alt="duration"
          width={13.5}
        />
        <div className="texsm">{duration} mins</div>
      </div>
     <button
        onClick={handleStartLesson}
        disabled={loading}
        className="btn-primary w-full justify-center"
      >
        {loading ? 'Starting...' : 'Start lesson'}
      </button>
    </article>
  );
};

export default CompanionCard;
