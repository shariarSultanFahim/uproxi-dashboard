"use client";

import { useState } from "react";
import { mockReels, ReelData } from "./data/mock-reels";
import { ReelCard } from "./components/reel-card";
import { FeedPagination } from "./components/feed-pagination";

export default function FeedReelsPage() {
  const [reels, setReels] = useState<ReelData[]>(mockReels);

  const handleDelete = (id: string) => {
    setReels(reels.filter(reel => reel.id !== id));
  };

  const handleUpdate = (id: string, newCaption: string) => {
    setReels(reels.map(reel =>
      reel.id === id ? { ...reel, caption: newCaption } : reel
    ));
  };

  return (
    <section className="flex flex-col gap-8 w-full">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-[#202c45] tracking-tight">Feed & Reels</h1>
        <p className="text-[#475467] text-[15px] max-w-3xl leading-relaxed">
          Manage and monitor all social media content published across the platform. Edit captions or remove content as necessary.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reels.map((reel) => (
          <ReelCard
            key={reel.id}
            reel={reel}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        ))}
        {reels.length === 0 && (
          <div className="col-span-full py-20 text-center text-[#8e98a8] font-medium">
            No reels found.
          </div>
        )}
      </div>

      {/* Pagination */}
      {reels.length > 0 && <FeedPagination />}
    </section>
  );
}
