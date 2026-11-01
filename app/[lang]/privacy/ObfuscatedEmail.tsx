"use client";

import { useState } from "react";

type Props = { user: string; domain: string };

export default function ObfuscatedEmail({ user, domain }: Props) {
  const [revealed, setRevealed] = useState(false);

  if (!revealed) {
    return (
      <button
        type="button"
        className="link link-primary"
        onClick={() => setRevealed(true)}
      >
        Show email address
      </button>
    );
  }

  const address = `${user}@${domain}`;
  return (
    <a href={`mailto:${address}`} className="link link-primary">
      {address}
    </a>
  );
}
