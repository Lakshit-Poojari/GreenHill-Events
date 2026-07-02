import React from "react";

const comments = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    post: "Top Wedding Entertainment Ideas",
    comment:
      "Amazing article! We booked a live band after reading this.",
    status: "Approved",
    date: "01 Jul 2026",
  },
  {
    id: 2,
    name: "Sarah Smith",
    email: "sarah@example.com",
    post: "Corporate Event Planning",
    comment:
      "Could you recommend entertainers for product launches?",
    status: "Pending",
    date: "30 Jun 2026",
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "michael@example.com",
    post: "Luxury Wedding Trends",
    comment:
      "This was really helpful. Looking forward to more blogs!",
    status: "Rejected",
    date: "29 Jun 2026",
  },
];

const statusColor = {
  Approved: "bg-green-500/20 text-green-400",
  Pending: "bg-yellow-500/20 text-yellow-400",
  Rejected: "bg-red-500/20 text-red-400",
};

export default function CommentsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="rounded-xl border border-gray-700 bg-[#181616] p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-white">
          Comments
        </h1>

        <p className="mt-2 text-gray-400">
          Manage and moderate blog comments.
        </p>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl border border-gray-700 bg-[#181616] shadow-lg">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="border-b border-gray-700 bg-[#202020]">
              <tr className="text-left text-sm uppercase tracking-wider text-gray-400">
                <th className="px-6 py-4">User</th>
                <th className="px-6 py-4">Post</th>
                <th className="px-6 py-4">Comment</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {comments.map((comment) => (
                <tr
                  key={comment.id}
                  className="border-b border-gray-700 hover:bg-[#202020]"
                >
                  <td className="px-6 py-5">
                    <div className="font-medium text-white">
                      {comment.name}
                    </div>
                    <div className="text-sm text-gray-400">
                      {comment.email}
                    </div>
                  </td>

                  <td className="px-6 py-5 text-gray-300">
                    {comment.post}
                  </td>

                  <td className="max-w-sm px-6 py-5 text-gray-300">
                    {comment.comment}
                  </td>

                  <td className="px-6 py-5">
                    <span
                      className={`rounded-full px-3 py-1 text-sm font-medium ${
                        statusColor[
                          comment.status as keyof typeof statusColor
                        ]
                      }`}
                    >
                      {comment.status}
                    </span>
                  </td>

                  <td className="px-6 py-5 text-gray-400">
                    {comment.date}
                  </td>

                  <td className="px-6 py-5">
                    <div className="flex justify-center gap-2">
                      <button className="rounded-md bg-green-600 px-3 py-2 text-sm text-white transition hover:bg-green-700">
                        Approve
                      </button>

                      <button className="rounded-md bg-red-600 px-3 py-2 text-sm text-white transition hover:bg-red-700">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {comments.length === 0 && (
                <tr>
                  <td
                    colSpan={6}
                    className="py-10 text-center text-gray-400"
                  >
                    No comments found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}