import React, { useRef } from 'react';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import useGameQueryStore from '../../store/useGameQueryStore';

export const SearchInput: React.FC = () => {
  const setSearchQuery = useGameQueryStore((state) => state.setSearchQuery);
  const refSearch = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (refSearch.current) {
      setSearchQuery(refSearch.current.value);
      navigate('/');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: '100%' }}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={refSearch}
          borderRadius={20}
          variant="filled"
          placeholder="Search games..."
          type="search"
        />
      </InputGroup>
    </form>
  );
};
