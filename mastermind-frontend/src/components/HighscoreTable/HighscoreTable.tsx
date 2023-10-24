import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserAvatar from "../UserAvatar/UserAvatar";
import { faMedal } from "@fortawesome/free-solid-svg-icons";
import { setMedal } from "@/utils/gameUtils";

export default function HighscoreTable({ highscoreList }: { highscoreList: [] }) {
    return <table className="w-full text-md text-center">
          <thead className="uppercase text-pink border-b">
            <tr>
            <th scope="col" className="hidden py-3 sm:block sm:px-6"></th>
              <th scope="col" className="py-3 px-4 sm:px-6">
                User
              </th>
              <th scope="col" className="py-3 px-4 md:px-6"></th>
              <th scope="col" className="py-3 px-4 md:px-6">
                Score
              </th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {highscoreList.map((arr, idx) => (
                <tr key={idx} className="border-b">
                  <td
                    scope="row"
                    className="hidden sm:block py-4 font-medium whitespace-nowrap"
                  >
                    <FontAwesomeIcon
                      size="3x"
                      color={arr[0] == 0 ? setMedal(null) : setMedal(idx)}
                      icon={faMedal}
                    />
                  </td>

                  <th
                    scope="row"
                    align="center"
                    className="py-4 font-medium whitespace-nowrap"
                  >
                    <UserAvatar url={arr[2]} />
                  </th>

                  <th
                    scope="row"
                    className="m-auto py-4 font-medium whitespace-nowrap"
                  >
                    {arr[1]}
                  </th>
                  <td className="py-4">{arr[0]}</td>
                </tr>
              ))}
          </tbody>
        </table>
}