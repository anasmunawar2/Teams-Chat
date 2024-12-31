interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  return <div className="">Header: {title}</div>;
};
