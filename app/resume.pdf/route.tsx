import { Document, Page, Text, View, StyleSheet, renderToBuffer } from "@react-pdf/renderer";
import { getExperience, getSettings } from "@/sanity/lib/queries";
import { period } from "@/lib/format";

const css = StyleSheet.create({
  page: { padding: 44, fontSize: 10, fontFamily: "Helvetica", color: "#1e1e1e", lineHeight: 1.45 },
  name: { fontSize: 24, fontFamily: "Helvetica-Bold", marginBottom: 2 },
  role: { fontSize: 12, marginBottom: 4 },
  meta: { fontSize: 8.5, color: "#5a5a56", marginBottom: 16 },
  h: { fontSize: 8.5, letterSpacing: 1, textTransform: "uppercase", color: "#5a5a56", borderBottomWidth: 1, borderBottomColor: "#1e1e1e", paddingBottom: 3, marginTop: 14, marginBottom: 8 },
  row: { flexDirection: "row", marginBottom: 9 },
  when: { width: 92, color: "#5a5a56", fontSize: 9 },
  body: { flex: 1 },
  title: { fontFamily: "Helvetica-Bold", fontSize: 10.5 },
  li: { marginTop: 2, color: "#3a3a37" },
});

export async function GET() {
  const [s, jobs] = await Promise.all([getSettings(), getExperience()]);
  const roles = jobs.filter((j) => j.showOnResume !== false);

  const doc = (
    <Document title={`${s?.name ?? "Resume"} - Resume`} author={s?.name}>
      <Page size="A4" style={css.page}>
        <Text style={css.name}>{s?.name}</Text>
        <Text style={css.role}>{s?.role}</Text>
        <Text style={css.meta}>
          {[s?.email, s?.location, ...(s?.socials ?? []).map((x) => x.url.replace(/^https?:\/\/(www\.)?/, ""))].filter(Boolean).join("   /   ")}
        </Text>
        {s?.summary && (<><Text style={css.h}>Profile</Text><Text>{s.summary}</Text></>)}
        <Text style={css.h}>Experience</Text>
        {roles.map((j) => (
          <View key={j._id} style={css.row} wrap={false}>
            <Text style={css.when}>{period(j.startDate, j.endDate)}</Text>
            <View style={css.body}>
              <Text style={css.title}>{j.company}, {j.role}</Text>
              {j.summary && <Text>{j.summary}</Text>}
              {j.highlights?.map((h) => <Text key={h} style={css.li}>- {h}</Text>)}
              {!!j.stack?.length && <Text style={[css.li, { color: "#5a5a56" }]}>{j.stack.map((t) => t.name).join(" / ")}</Text>}
            </View>
          </View>
        ))}
        {!!s?.education?.length && (
          <>
            <Text style={css.h}>Education</Text>
            {s.education.map((e) => (
              <View key={e._key} style={css.row}>
                <Text style={css.when}>{e.period}</Text>
                <Text style={css.body}>{e.institution}{e.qualification ? `, ${e.qualification}` : ""}</Text>
              </View>
            ))}
          </>
        )}
        {!!s?.certifications?.length && (<><Text style={css.h}>Certifications</Text>{s.certifications.map((c) => <Text key={c}>{c}</Text>)}</>)}
      </Page>
    </Document>
  );

  const buffer = await renderToBuffer(doc);
  return new Response(new Uint8Array(buffer), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'inline; filename="Ameerul-Hady-Resume.pdf"',
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
