import React, { useState, useEffect } from "react";
import { getAssociationScores } from "./services";
import Table from "./components/Table";
import { Spin } from "antd";
import "./App.css";

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await getAssociationScores().then(data => {
        const scores = data.data
          .sort(
            (a, b) => b.association_score.overall - a.association_score.overall
          )
          .slice(0, 5);
        setData(scores);
        setLoading(false);
      });
    };
    fetchData();
  }, []);

  if (loading) return <Spin className="spin" />;
  else {
    return (
      <main>
        <h3 className="title">Genes associated with lung carcinoma</h3>
        <div className="table-container">
          <div className="uk-overflow-auto">
            <Table scores={data} loading={loading} />
          </div>
        </div>
      </main>
    );
  }
}
