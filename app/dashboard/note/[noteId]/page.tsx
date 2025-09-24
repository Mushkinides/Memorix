import { PageWrapper } from "@/components/page-wrapper";
import RichTextEditor from "@/components/rich-text-editor";
import { getNoteById } from "@/server/notes";
import { JSONContent } from "@tiptap/react";

type Params = Promise<{
  noteId: string;
}>;

export default async function NotePage({ params }: { params: Params }) {
  const { noteId } = await params;

  const { note } = await getNoteById(noteId);

  // TODO: YOMAMA get rid of the [0]
  return (
    <PageWrapper
      breadcrumbs={[
        { label: "Dashboard", href: "/dashboard" },
        { label: note[0]?.title ?? "Note", href: `/dashboard/note/${noteId}` },
      ]}
    >
      <h1>{note[0]?.title}</h1>
      <RichTextEditor
        content={note[0]?.content as JSONContent[]}
        noteId={noteId}
      />
    </PageWrapper>
  );
}
