"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Edit } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface CaseStudy {
  id: number;
  title: string;
  image: string;
  description: string;
  youtube_url?: string;
  slug: string;
  status: "ACTIVE" | "INACTIVE";
  created_by_name: string;
  created_at: string;
  updated_by_name?: string;
  updated_at?: string;
}

const Page = () => {
  const { id } = useParams();

  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCaseStudy();
  }, []);

  const fetchCaseStudy = async () => {
    try {
      const response = await fetch(`/api/caseStudy/${id}`);
      const result = await response.json();
      console.log(result);
      
      if (result.success) {
        setCaseStudy(result.caseStudy[0]);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="py-20 text-center text-white">
        Loading...
      </div>
    );
  }

  if (!caseStudy) {
    return (
      <div className="py-20 text-center text-red-400">
        Case study not found.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">
            View Case Study
          </h1>
          <p className="mt-1 text-gray-400">
            View case study details.
          </p>
        </div>

        <div className="flex gap-3">
          <Link
            href="/controlpanel/case-studies"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-700 bg-[#181616] px-4 py-2 text-white hover:border-[rgba(201,172,140,1)]"
          >
            <ArrowLeft size={18} />
            Back
          </Link>

          <Link
            href={`/controlpanel/case-studies/edit/${caseStudy.id}`}
            className="inline-flex items-center gap-2 rounded-lg bg-[rgba(201,172,140,1)] px-4 py-2 font-semibold text-black hover:opacity-90"
          >
            <Edit size={18} />
            Edit
          </Link>
        </div>
      </div>

      {/* Details */}
      <div className="rounded-xl border border-gray-700 bg-[#181616] p-8">
        <div className="space-y-6">
          <div>
            <h2 className="text-sm text-gray-400">Title</h2>
            <p className="mt-1 text-lg font-semibold text-white">
              {caseStudy.title}
            </p>
          </div>

          <div>
            <h2 className="text-sm text-gray-400">Status</h2>

            <span
              className={`rounded-full px-3 py-1 text-sm font-semibold ${
                caseStudy.status === "ACTIVE"
                  ? "bg-green-500/20 text-green-400"
                  : "bg-red-500/20 text-red-400"
              }`}
            >
              {caseStudy.status}
            </span>
          </div>

          <div>
            <h2 className="text-sm text-gray-400">Slug</h2>
            <p className="mt-1 text-white">{caseStudy.slug}</p>
          </div>

          <div>
            <h2 className="text-sm text-gray-400">Featured Image</h2>
{/* 
            <Image
              src={caseStudy.image}
              alt={caseStudy.title}
              width={900}
              height={500}
              className="mt-3 rounded-lg"
            /> */}
          </div>

          <div>
            <h2 className="text-sm text-gray-400">Description</h2>

            <p className="mt-2 whitespace-pre-line text-gray-300">
              {caseStudy.description}
            </p>
          </div>

          {caseStudy.youtube_url && (
            <div>
              <h2 className="text-sm text-gray-400">
                YouTube Video
              </h2>

              <iframe
                className="mt-3 aspect-video w-full max-w-2xl rounded-lg"
                src={caseStudy.youtube_url}
                allowFullScreen
              />
            </div>
          )}
        </div>
      </div>

      {/* Audit */}
      <div className="rounded-xl border border-gray-700 bg-[#181616] p-8">
        <h2 className="mb-6 text-xl font-semibold text-white">
          Audit Information
        </h2>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-sm text-gray-400">Created By</p>
            <p className="text-white">{caseStudy.created_by_name}</p>
          </div>

          <div>
            <p className="text-sm text-gray-400">Created At</p>
            <p className="text-white">
              {new Date(caseStudy.created_at).toLocaleString()}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-400">Updated By</p>
            <p className="text-white">
              {caseStudy.updated_by_name ?? "-"}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-400">Updated At</p>
            <p className="text-white">
              {caseStudy.updated_at
                ? new Date(caseStudy.updated_at).toLocaleString()
                : "-"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;