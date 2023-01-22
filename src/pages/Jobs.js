import React from "react";
import { useNavigate } from "react-router-dom";
import JobCard from "../components/reusable/JobCard";
import { useGetJobsQuery } from "../features/job/jobApi";

const Jobs = () => {
  const navigate = useNavigate();
  const { data, isLoading, isError } = useGetJobsQuery();
 
  return (
    <div className="pt-14">
      <div className="bg-primary/10 p-5 ">
        <h1 className="font-semibold text-xl container mx-auto">Find Jobs</h1>
      </div>

      <div className="grid grid-cols-2 gap-5 mt-5 container mx-auto">
   
        {data?.data?.map((job) => (
          <>
            <JobCard jobData= {job} />
          </>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
