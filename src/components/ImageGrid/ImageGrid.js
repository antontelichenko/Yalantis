import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";

import usersInMonths from "./logic";
import Month from "../Month";
import { loadUsers } from "../../actions";

import loader from "./loader.svg";
import "./styles.css";

const MonthsGrid = ({ loadUsers, users, error, isLoading }) => {
  useEffect(() => {
    loadUsers();
  }, []);
  let months = usersInMonths(users);
  return (
    <div className="content">
      {isLoading ? (
        <Fragment>
          <img src={loader} className="loader" alt="loader" />
        </Fragment>
      ) : (
        <section className="grid">
          {months.length
            ? months.map((month) => <Month key={month.id} {...month} />)
            : null}
        </section>
      )}
      {error && <div className="error">{JSON.stringify(error)}</div>}
    </div>
  );
};

const mapStateToProps = ({ isLoading, users, error }) => ({
  isLoading,
  users,
  error,
});

const mapDispatchToProps = { loadUsers };

export default connect(mapStateToProps, mapDispatchToProps)(MonthsGrid);
