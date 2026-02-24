import Link from "next/link";
import { Metadata } from "next";
import BackButton from "@/components/BackButton";

export const metadata: Metadata = {
    title: "404 - Page Not Found | Puzzlez",
    description: "The page you are looking for does not exist.",
};

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted/40 px-6">
            <div className="text-center max-w-xl">

                {/* 404 Number */}
                <h1 className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    404
                </h1>

                {/* Title */}
                <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-foreground">
                    Puzzle Piece Missing!
                </h2>

                {/* Description */}
                <p className="mt-4 text-muted-foreground">
                    Oops! It looks like this puzzle piece doesn't fit anywhere in our collection.
                    The page you're looking for might have been moved, deleted, or never existed.
                </p>

                {/* Actions */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/"
                        className="px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
                    >
                        Go to Home
                    </Link>

                    <BackButton />
                </div>
            </div>
        </div>
    );
}