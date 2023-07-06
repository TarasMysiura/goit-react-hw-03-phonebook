import React from 'react';
import { Input, Label, Span } from './Filter.styled';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';


export const Filter = ({ value, onChangeFilter }) => {

  return (
    <div>
      <Label>
        <Span>Filter</Span>

        <Input
          onChange={onChangeFilter}
          value={value}
          type="text"
          id={nanoid(5)}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
        />
      </Label>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChangeFilter: PropTypes.func.isRequired,
};
