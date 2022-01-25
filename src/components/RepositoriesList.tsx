import React, { useState } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

const RepositoriesList: React.FC = () => {
  const [search, setSearch] = useState('');
  const { searchRepositories } = useActions();
  const { data, error, loading } = useTypedSelector((state) => state.repositories);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    searchRepositories(search);
  }

  return <div>
    <form onSubmit={handleSubmit}>
      <input value={search} onChange={(e) => setSearch(e.target.value)}/>
      <button>Search</button>
    </form>
  </div>
};

export default RepositoriesList