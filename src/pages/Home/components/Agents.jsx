import React, { useEffect, useState } from "react";
import profileError from "../../../assets/profileError.png";
import Agent from "../../../components/Agent";
import SectionTitle from "../../../components/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Agents = () => {
  const [agents, setAgents] = useState([]);
  const [count, setCount] = useState([]);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure.get(`/agents?page=0&size=4`).then((res) => {
      console.log(res.data.result);
      setAgents(res.data.result);
      setCount(res.data.count);
    });
  }, []);

  return (
    <>
      <section className="container mx-auto py-20 w-11/12">
        <SectionTitle
          title={"Our Agents"}
          subTitle={"Meet our expert agents"}
          color={"black"}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
      </section>
    </>
  );
};

export default Agents;
