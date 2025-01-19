import React, { useEffect, useState } from "react";
import Agent from "../components/Agent";
import BreadcumbBanner from "../components/BreadcumbBanner";
import SectionTitle from "../components/SectionTitle";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Pagination from "../components/Pagination";
import { useLoaderData } from "react-router-dom";

const Agents = () => {
  const loadedData = useLoaderData();
  const [agents, setAgents] = useState(loadedData.result);
  const [count, setCount] = useState(loadedData.count);
  const axiosSecure = useAxiosSecure();
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  useEffect(() => {
    axiosSecure
      .get(`/agents?page=${currentPage}&size=${itemsPerPage}`)
      .then((res) => {
        // console.log(res.data.result);
        setAgents(res.data.result);
        setCount(res.data.count);
      });
  }, [itemsPerPage, currentPage]);
  const numberOfPages = Math.ceil(count / itemsPerPage) || 1;
  const pages = [...Array(numberOfPages).keys()];
  return (
    <>
      <BreadcumbBanner title={"Agents"} />
      <section className="container mx-auto py-20 w-11/12">
        <SectionTitle
          title={"Our Agents"}
          subTitle={"Meet our expert agents"}
          color={"black"}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
          {count > 0 ? (
            <>
              {agents.map((agent, index) => (
                <Agent key={index} agent={agent} />
              ))}
            </>
          ) : (
            <>No Agents Found!</>
          )}
        </div>
        {/* Pagination */}
        {count > 0 && (
          <Pagination
            setItemsPerPage={setItemsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            pages={pages}
            itemsPerPage={itemsPerPage}
          />
        )}
      </section>
    </>
  );
};

export default Agents;
