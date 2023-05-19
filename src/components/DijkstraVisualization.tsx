import React, { useState } from "react";
import "../CSS/tutorial.css";
import { Helmet } from "react-helmet";

type Graph = {
  [key: string]: { [key: string]: number };
};

type Node = {
  id: string;
  label: string;
  backgroundColor?: string;
};

const DijkstraVisualization = () => {
  const [result, setResult] = useState<string>("");
  const [graphNodes, setGraphNodes] = useState<Node[]>([
    { id: "A", label: "A" },
    { id: "B", label: "B" },
    { id: "C", label: "C" },
    { id: "D", label: "D" },
    { id: "E", label: "E" },
  ]);

  const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const runDijkstra = async () => {
    const graph: Graph = {
      A: { B: 4, C: 2 },
      B: { A: 4, C: 1, D: 5 },
      C: { A: 2, B: 1, D: 8, E: 10 },
      D: { B: 5, C: 8, E: 2 },
      E: { C: 10, D: 2 },
    };

    const startNode = "A";

    setResult("");
    setGraphNodes((prevNodes) =>
      prevNodes.map((node) => ({ ...node, backgroundColor: "" }))
    );

    const distances: { [key: string]: number } = {};
    const visited: { [key: string]: boolean } = {};
    const previous: { [key: string]: string | null } = {};

    for (const node in graph) {
      distances[node] = Infinity;
      previous[node] = null;
    }

    distances[startNode] = 0;

    let currentNode: string | null = startNode;

    while (currentNode) {
      visited[currentNode] = true;
      setGraphNodes((prevNodes) =>
        prevNodes.map((node) =>
          node.id === currentNode
            ? { ...node, backgroundColor: "#99ff99" }
            : node
        )
      );

      await sleep(2000);

      // Update all possible paths and their weights dynamically
      let allPaths = "";
      for (const node in previous) {
        let path = `${node}`;
        let prevNode: string | null = previous[node];
        let weight = distances[node];
        while (prevNode) {
          path = `${prevNode} -> ${path}`;
          weight += distances[prevNode];
          prevNode = previous[prevNode];
        }
        allPaths += `* ${path} (Weight: ${weight})\n`;
      }

      setResult(allPaths);

      for (const neighbor in graph[currentNode]) {
        const distance = graph[currentNode][neighbor];
        const totalDistance = distances[currentNode] + distance;
        if (totalDistance < distances[neighbor]) {
          distances[neighbor] = totalDistance;
          previous[neighbor] = currentNode;
        }
      }

      let nextNode: string | null = null;
      let shortestDistance = Infinity;

      for (const node in distances) {
        if (!visited[node] && distances[node] < shortestDistance) {
          nextNode = node;
          shortestDistance = distances[node];
        }
      }

      if (nextNode) {
        const edge = document.createElement("div");
        edge.classList.add("edge");

        const currentNodeElement = document.getElementById(
          currentNode
        ) as HTMLDivElement;
        const nextNodeElement = document.getElementById(
          nextNode
        ) as HTMLDivElement;

        currentNodeElement.appendChild(edge);
        nextNodeElement.appendChild(edge);

        await sleep(2000);

        currentNode = nextNode;
      } else {
        currentNode = null;
      }
    }

    // Reset colors
    setGraphNodes((prevNodes) =>
      prevNodes.map((node) => ({ ...node, backgroundColor: "" }))
    );

    // Find the shortest path
    let shortestPath: string | null = null;
    let shortestWeight = Infinity;
    for (const node in previous) {
      let path = `${node}`;
      let prevNode: string | null = previous[node];
      let weight = distances[node];
      while (prevNode) {
        path = `${prevNode} -> ${path}`;
        weight += distances[prevNode];
        prevNode = previous[prevNode];
      }
      if (weight < shortestWeight) {
        shortestPath = path;
        shortestWeight = weight;
      }
    }
  };

  return (
    <div className="dijkstra-body">
      <Helmet>
        <title>
          Dijkstra's Algorithm in Path Finding Tutorial with Visualization and
          Demo | UIBoxx.in
        </title>
        <meta
          name="description"
          content="Learn Dijkstra's algorithm in path finding with our tutorial. Understand the concepts and implementation of Dijkstra's algorithm through interactive visualizations and demos. Discover efficient path finding techniques and improve your problem-solving skills."
        />
        <meta
          name="keywords"
          content="Dijkstra's algorithm, path finding algorithm, algorithm tutorial, Dijkstra's algorithm tutorial, path finding visualization, algorithm visualization, algorithm demo, data structures and algorithms, problem-solving"
        />
      </Helmet>
      <div className="dijkstra-cards">
        <h1>Dijkstra's Algorithm</h1>
        <div className="dijkstra-card">
          <div className="dj-graph" id="graph">
            {graphNodes.map((node) => (
              <div
                key={node.id}
                className="dj-node"
                id={node.id}
                style={{ backgroundColor: node.backgroundColor }}
              >
                {node.label}
              </div>
            ))}
          </div>
          <div className="dj-result" id="dj-result">
            <h1>Results:</h1>
            {result.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </div>
        </div>
        <button onClick={runDijkstra}>Run Dijkstra's Algorithm</button>
      </div>
      <div className="intro">
        <details>
          <summary>Introduction</summary>
          <p>
            Dijkstra's algorithm is a widely used graph traversal algorithm that
            efficiently finds the shortest path between a starting node and all
            other nodes in a weighted graph. It operates by iteratively
            selecting the node with the smallest tentative distance, updating
            the distances to its neighboring nodes, and marking visited nodes
            until all nodes have been visited or the destination node has been
            reached. The algorithm guarantees the shortest path by maintaining a
            priority queue of nodes based on their distances. With its ability
            to handle positive edge weights, Dijkstra's algorithm has various
            applications, such as finding optimal routes in transportation
            networks, determining the least costly path in resource allocation,
            and solving network routing problems.
          </p>
        </details>
      </div>
      <div className="intro">
        <details>
          <summary>
            A Step-by-Step Explanation of Dijkstra's Shortest Path Algorithm
          </summary>
          <ul>
            <li>
              <h2>Initialize the graph</h2>
              <p>
                Start by defining the graph you want to find the shortest path
                in. The graph should consist of nodes (vertices) and edges. Each
                edge should have a weight (a numerical value representing the
                distance or cost between two nodes).
              </p>
            </li>
            <li>
              <h2>Assign initial values</h2>
              <p>
                Assign a tentative distance value to every node in the graph.
                Set the starting node's distance value to 0 and all other nodes'
                distance values to infinity. Create a set of unvisited nodes and
                add all the nodes to it.
              </p>
            </li>
            <li>
              <h2>Visit the node with the smallest distance</h2>
              <p>
                Select the unvisited node with the smallest distance value. This
                node will be the current node.
              </p>
            </li>
            <li>
              <h2>Update distances</h2>
              <p>
                For each neighbor of the current node, calculate the tentative
                distance from the starting node to that neighbor. This is done
                by summing the distance from the current node to the neighbor
                with the distance value of the current node. If this tentative
                distance is smaller than the previously assigned distance,
                update the neighbor's distance value.
              </p>
            </li>
            <li>
              <h2>Mark current node as visited</h2>
              <p>
                Once all the neighbors of the current node have been visited and
                their distances updated (if necessary), mark the current node as
                visited and remove it from the set of unvisited nodes.
              </p>
            </li>
            <li>
              <h2>Repeat steps 3-5</h2>
              <p>
                Repeat steps 3 to 5 until all the nodes in the graph have been
                visited, or until the destination node is marked as visited.
              </p>
            </li>
            <li>
              <h2>Determine the shortest path</h2>
              <p>
                Once all nodes have been visited (or the destination node has
                been visited), you can determine the shortest path from the
                starting node to any other node by backtracking from the
                destination node. Start from the destination node and move to
                its parent node, then to the parent of that node, and so on,
                until you reach the starting node. The reverse of this path will
                be the shortest path from the starting node to the destination
                node.
              </p>
            </li>
            <li>
              <h2>Optimization (optional)</h2>
              <p>
                If you want to optimize the algorithm to store the shortest
                paths as well, you can maintain a separate data structure (such
                as an array or a dictionary) to store the parent node for each
                visited node. Whenever you update a neighbor's distance value,
                also update its parent node to keep track of the shortest path.
              </p>
            </li>
          </ul>
        </details>
      </div>
    </div>
  );
};

export default DijkstraVisualization;
