const UserTypings = ({
    userInput,
    className,
  }: {
    userInput: string;
    className?: string;
  }) => {
    const typedCharacters = userInput.split("");

    return(
        <div className={className}>
            {typedCharacters.map((char, index) => {
                return <span key={`${char}_${index}`}>{char}</span>
            })}
        </div>
    );
  };

  const Character = ({ char }: {char: string}) => {
    return <span className="text-primary-400">{char}</span>;
  };

  export default UserTypings;