import SectionTitle from "../../components/SectionTitle";
import useAnnouncements from "../../hooks/useAnnouncements";

const Announcements = () => {
  const [announcements] = useAnnouncements();
  return (
    <div>
      <SectionTitle title="Announcements" subTitle="Good news for you" />
      <div>
        <h2 className="text-3xl font-bold my-5 border-b-2 border-[#e87726] w-fit pb-3">
          Announcement Title: {announcements.title}
        </h2>
        <p className="leading-8">
          <strong>Announcement description: </strong>
          {announcements.description}
        </p>
      </div>
    </div>
  );
};
export default Announcements;
