import React, { FC } from "react";
import { Item, RemoveButton } from "../App.styled";
type ComponentProps = {
  id?: number;
  name?: string;
  onRemove?: () => void;
  done?: boolean;
  onCheck?: () => void;
};

export const TodoItem: FC<ComponentProps> = ({
  id,
  name,
  onRemove,
  done,
  onCheck
}) => (
  <Item onClick={onCheck}>
    <input checked={done} type="checkbox" readOnly />
    <span>{id}</span> - <span>{name}</span>
    &nbsp;-&nbsp;
    <span>{done ? "done" : "undone"}</span>
    <RemoveButton onClick={onRemove}>R</RemoveButton>
  </Item>
);
