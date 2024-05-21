import { fetchUsers, setPage, setSearchQuery } from "@/features/users/usersSlice";
import useDebounce, { useAppDispatch, useAppSelector } from "@/hooks/useUserList";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProfilePage from "../Profile/ProfilePage";

const CommunityPage = () => {
  const dispatch = useAppDispatch();
  const { users, page, totalPages, searchQuery, loading, error } = useAppSelector(
    (state) => state.users
  );

  const [query, serchQuery] = useState(searchQuery);
  const deboucedQuery = useDebounce(query, 700);

  useEffect(() => {
    dispatch(fetchUsers({ page, searchQuery: deboucedQuery }));
  }, [dispatch, page, deboucedQuery]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const handlePrevPage = () => {
    if (page > 1) {
      dispatch(setPage(page - 1));
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      dispatch(setPage(page + 1));
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    serchQuery(e.target.value);
    dispatch(setSearchQuery(e.target.value));
  }

  return (
    <>
      {/* <h1>Users</h1>
      <div>
        <input type="text"
          placeholder="Search users..."
          value={searchQuery}
          onChange={handleSearch} 
        />
      </div> */}
      <div className="grid grid-cols-3 gap-4">
        {users.map((user: any) => (
            <ProfilePage
              key={user.name}
              id={user.name}
              name={user.name}
              image={"https://picsum.photos/200/300"}
              // tags={user.tags}
              nickname={user.name}
            />
          ))}
        {/* {users.map((user: any) => (
          <Link to={`/profile/${user.name}`} key={user.name} className="user-card">
            <h3>{user.name}</h3>
            <p>Height: {user.height}</p>
            <p>Mass: {user.mass}</p>
          </Link>
        ))} */}
      </div>
      <button onClick={handlePrevPage} disabled={page === 1}>
        Previous
      </button>
      <button onClick={handleNextPage} disabled={page === totalPages}>
        Next
      </button>
    </>
  );
};

export default CommunityPage;
