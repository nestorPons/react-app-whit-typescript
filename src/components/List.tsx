interface Props {
  children?: JSX.Element;
  subs: Array<{
    nick: string;
    avatar: string;
    subMonths: number;
    description?: string;
  }>;
}
const List = ({ subs }: Props) => {
  const renderList = (): JSX.Element[] => {
    return subs.map(sub => {
      return (
        <li>
          {sub.nick}
          <img src={sub.avatar} alt={`Avatar for ${sub.nick}`} />
        </li>
      );
    });
  };
  return (
    <ul>
      {renderList()}
    </ul>
  )
};

export default List;
