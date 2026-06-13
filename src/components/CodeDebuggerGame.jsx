import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bug, CheckCircle2, XCircle, RotateCcw, Terminal, Sparkles } from "lucide-react";

// Each round: a code snippet with one buggy line.
// `buggyLine` is the 1-based line number the visitor needs to click.
const rounds = [
  {
    lang: "javascript",
    code: [
      "function getTotal(cart) {",
      "  let total = 0;",
      "  for (let i = 0; i <= cart.length; i++) {",
      "    total += cart[i].price;",
      "  }",
      "  return total;",
      "}",
    ],
    buggyLine: 3,
    explanation:
      "Off-by-one! `i <= cart.length` reaches one index too far and reads undefined.",
    fixed: "  for (let i = 0; i < cart.length; i++) {",
  },
  {
    lang: "java",
    code: [
      "public boolean isEven(int num) {",
      "    if (num % 2 = 0) {",
      "        return true;",
      "    }",
      "    return false;",
      "}",
    ],
    buggyLine: 2,
    explanation:
      "Assignment vs comparison! `=` assigns, `==` compares. This won't even compile.",
    fixed: "    if (num % 2 == 0) {",
  },
  {
    lang: "javascript",
    code: [
      "const fetchUser = async (id) => {",
      "  const res = fetch(`/api/users/${id}`);",
      "  const data = await res.json();",
      "  return data;",
      "};",
    ],
    buggyLine: 2,
    explanation:
      "Missing `await`! Without it, `res` is a Promise, not a Response — `.json()` will fail.",
    fixed: "  const res = await fetch(`/api/users/${id}`);",
  },
];

const successMessages = [
  "🎯 Nice catch — you've got debugger instincts.",
  "🔥 Spotted it instantly. Code review approved.",
  "🧠 That's the kind of bug that survives 3 PRs. Well caught.",
];

export const CodeDebuggerGame = () => {
  const [roundIndex, setRoundIndex] = useState(0);
  const [selectedLine, setSelectedLine] = useState(null);
  const [status, setStatus] = useState("playing"); // playing | correct | wrong
  const [score, setScore] = useState(0);

  const round = rounds[roundIndex];

  const handleLineClick = (lineNum) => {
    if (status !== "playing") return;
    setSelectedLine(lineNum);
    if (lineNum === round.buggyLine) {
      setStatus("correct");
      setScore((s) => s + 1);
    } else {
      setStatus("wrong");
    }
  };

  const nextRound = () => {
    setRoundIndex((r) => (r + 1) % rounds.length);
    setSelectedLine(null);
    setStatus("playing");
  };

  const resetRound = () => {
    setSelectedLine(null);
    setStatus("playing");
  };

  const successMsg = successMessages[roundIndex % successMessages.length];

  return (
    <section id="bughunt" className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Ambient glow blobs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-400/15 dark:bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-400/15 dark:bg-purple-600/10 rounded-full blur-3xl" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-sm font-semibold text-blue-600 dark:text-blue-400 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md shadow-[0_4px_12px_rgba(59,130,246,0.2),inset_0_1px_0_rgba(255,255,255,0.6)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.4)] border border-white/50 dark:border-gray-700/50">
            🐞 Mini challenge
          </span>
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-3">
            Spot the{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Bug
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Click the line you think is broken. Think you can out-debug me?
          </p>
        </motion.div>

        {/* Editor card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden bg-gray-900 dark:bg-gray-950 shadow-[0_25px_60px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.05)] border border-white/10"
          style={{ perspective: "1200px" }}
        >
          {/* Window chrome */}
          <div className="flex items-center justify-between px-5 py-3.5 bg-gray-800/80 border-b border-white/5">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm font-mono">
              <Terminal className="w-3.5 h-3.5" />
              round-{roundIndex + 1}.{round.lang === "java" ? "java" : "js"}
            </div>
            <div className="text-xs sm:text-sm font-semibold px-2.5 py-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
              Score: {score}
            </div>
          </div>

          {/* Code lines */}
          <div className="p-2 sm:p-4 font-mono text-sm sm:text-base">
            {round.code.map((line, idx) => {
              const lineNum = idx + 1;
              const isSelected = selectedLine === lineNum;
              const isBuggy = lineNum === round.buggyLine;
              const showResult = status !== "playing";

              let highlight = "";
              if (showResult && isBuggy) {
                highlight = "bg-green-500/15 border-l-4 border-green-500";
              } else if (showResult && isSelected && !isBuggy) {
                highlight = "bg-red-500/15 border-l-4 border-red-500";
              }

              return (
                <motion.div
                  key={idx}
                  onClick={() => handleLineClick(lineNum)}
                  whileHover={status === "playing" ? { x: 4, backgroundColor: "rgba(99,102,241,0.08)" } : {}}
                  className={`flex items-start gap-3 sm:gap-4 px-3 py-2 rounded-lg transition-colors ${highlight} ${
                    status === "playing" ? "cursor-pointer" : "cursor-default"
                  }`}
                >
                  <span className="select-none text-gray-500 w-5 sm:w-6 text-right flex-shrink-0">
                    {lineNum}
                  </span>
                  <pre className="text-gray-200 whitespace-pre overflow-x-auto flex-1">
                    {showResult && isBuggy ? round.fixed : line}
                  </pre>
                  {showResult && isBuggy && (
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  )}
                  {showResult && isSelected && !isBuggy && (
                    <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Result panel */}
          <AnimatePresence mode="wait">
            {status !== "playing" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className={`p-5 sm:p-6 border-t border-white/5 ${
                  status === "correct"
                    ? "bg-gradient-to-r from-green-500/10 to-emerald-500/10"
                    : "bg-gradient-to-r from-red-500/10 to-orange-500/10"
                }`}>
                  <div className="flex items-start gap-3">
                    <div className={`relative flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-2xl ${
                      status === "correct"
                        ? "bg-gradient-to-br from-green-500 to-emerald-500"
                        : "bg-gradient-to-br from-red-500 to-orange-500"
                    } text-white shadow-[0_8px_20px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.3)]`}>
                      {status === "correct" ? <Sparkles className="w-5 h-5" /> : <Bug className="w-5 h-5" />}
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-semibold mb-1">
                        {status === "correct" ? successMsg : "Not quite — that line runs fine."}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {status === "correct"
                          ? round.explanation
                          : `Line ${round.buggyLine} is the real culprit. Hint: re-check it carefully.`}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-5">
                    {status === "wrong" && (
                      <motion.button
                        onClick={resetRound}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-gray-200 bg-white/10 hover:bg-white/15 border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] transition-colors"
                      >
                        <RotateCcw className="w-4 h-4" />
                        Try Again
                      </motion.button>
                    )}
                    <motion.button
                      onClick={nextRound}
                      whileHover={{ y: -2, boxShadow: "0 12px 24px rgba(99,102,241,0.4)" }}
                      whileTap={{ scale: 0.97 }}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-[0_8px_20px_rgba(99,102,241,0.3),inset_0_1px_0_rgba(255,255,255,0.3)] transition-shadow"
                    >
                      Next Challenge →
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
          {rounds.length} rounds · click a line number or code to make your guess
        </p>
      </div>
    </section>
  );
};