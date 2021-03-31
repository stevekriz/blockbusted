import React from "react";
import PropTypes from "prop-types";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({ columns, sortColumn, onSort, data }) => {
  return (
    <table className="table">
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <TableBody columns={columns} data={data} />
    </table>
  );
};

Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object),
  sortColumn: PropTypes.objectOf(PropTypes.string).isRequired,
  onSort: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object),
};

export default Table;
