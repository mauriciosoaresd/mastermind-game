import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserAvatar from "../UserAvatar/UserAvatar";
import { faMedal } from "@fortawesome/free-solid-svg-icons";
import { setMedal } from "@/utils/gameUtils";

export default function HighscoreTable({ highscoreList }: { highscoreList: [] }) {
    return <table className="w-full text-md text-left">
          <thead className="uppercase text-pink border-b">
            <tr>
            <th scope="col" className="px-6 py-3"></th>
              <th scope="col" className="px-6 py-3">
                User
              </th>
              <th scope="col" className="px-6 py-3"></th>
              <th scope="col" className="px-6 py-3">
                Score
              </th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {highscoreList.map((arr, idx) => (
                <tr key={idx} className="border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap"
                  >
                    <FontAwesomeIcon
                      size="3x"
                      color={arr[0] == 0 ? setMedal(null) : setMedal(idx)}
                      icon={faMedal}
                    />
                  </th>

                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap"
                  >
                    <UserAvatar url={arr[2]} />
                  </th>

                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap"
                  >
                    {arr[1]}
                  </th>
                  <td className="px-6 py-4">{arr[0]}</td>
                </tr>
              ))}
          </tbody>
        </table>
}