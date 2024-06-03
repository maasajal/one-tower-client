import SectionTitle from "../../components/SectionTitle";
import useAnnouncements from "../../hooks/useAnnouncements";

const Announcements = () => {
  const [announcements] = useAnnouncements();
  return (
    <div>
      <SectionTitle title="Announcements" subTitle="Good news for you" />
      <div>
        <h2 className="text-3xl font-bold my-5 border-b-2 border-[#e87726] w-fit pb-3">
          Announcements by house owner
        </h2>
        <div className="overflow-x-auto">
          <table className="table bg-[#3d5cab] text-white">
            {/* head */}
            <thead>
              <tr className=" text-white">
                <th></th>
                <th>Announcement Title</th>
                <th>Announcement description</th>
              </tr>
            </thead>
            <tbody>
              {announcements.map((announce, index) => (
                <tr>
                  <th>{index + 1} </th>
                  <th>{announce.title}</th>
                  <td>{announce.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Announcements;
