import { ElementType, FC } from "react";
import "./styles.css";

interface Props {
  created: string;
  modified: string;
  as?: ElementType;
}

export const DateCreatedModified: FC<Props> = ({
  created,
  modified,
  as: Comp = "p",
}) => {
  const isEdited = new Date(modified).valueOf() !== new Date(created).valueOf();
  return (
    <Comp>
      <time className="timestamp" dateTime={created}>
        {new Date(created).toLocaleDateString("en-UK")}
      </time>
      {isEdited && (
        <>
          &nbsp;
          <time
            className="timestamp timestamp--modified"
            dateTime={modified}
            title={new Date(modified).toLocaleDateString("en-UK")}
          >
            (edited)
          </time>
        </>
      )}
    </Comp>
  );
};

export default DateCreatedModified;
