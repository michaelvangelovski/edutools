import { Fragment } from "react";
import { Link } from "wouter"


export default () => {
  return (
    <Fragment>
      <div>
        <h1 className="text-3xl font-bold underline">List</h1>
        <Link href="/form" className="active">Form</Link>
      </div>
    </Fragment>
  );
};