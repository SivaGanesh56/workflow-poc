const inputData = [
  {
    id: "1",
    type: "rectangle",
    data: {
      title: "Intent Detection",
      description: "Reading Customer Conversation",
      icon: "bot",
    },
    nodes: [
      {
        sourcePosition: "bottom",
        targetPosition: "top",
        node: {
          id: "2",
          type: "rectangle",
          data: {
            title: "Customer Authentication",
            description: "Ask for Mobile Number",
            icon: "auth",
          },
          nodes: [
            {
              sourcePosition: "bottom",
              targetPosition: "top",
              node: {
                id: "3",
                type: "rectangle",
                data: {
                  title: "Yes",
                  description: "Authenticated",
                  icon: "correct",
                  variant: "green",
                  handles: [
                    {
                      position: "left",
                      id: "node3-left",
                      type: "source",
                    },
                    {
                      position: "right",
                      id: "node3-right",
                      type: "source",
                    },
                  ],
                },
                nodes: [
                  {
                    sourcePosition: "left",
                    targetPosition: "right",
                    node: {
                      id: "4",
                      type: "rectangle",
                      data: {
                        title: "Collect Account Details",
                        description: "PCI Compliant",
                        icon: "pci",
                        handles: [
                          {
                            position: "right",
                            id: "node4-right",
                            type: "target",
                          },
                        ],
                      },
                      nodes: [
                        {
                          sourcePosition: "bottom",
                          targetPosition: "top",
                          node: {
                            id: "6",
                            type: "rectangle",
                            data: {
                              title: "Raised Complaint",
                              description: "Complaint raised to service",
                              icon: "bot",
                            },
                            position: {
                              x: -247,
                              y: 366,
                            },
                          },
                        },
                      ],
                    },
                  },
                  {
                    sourcePosition: "right",
                    targetPosition: "left",
                    node: {
                      id: "5",
                      type: "rectangle",
                      data: {
                        title: "Return Details to Customer",
                        description: "Send Message",
                        icon: "telegram",
                        handles: [
                          {
                            position: "left",
                            id: "node5-left",
                            type: "target",
                          },
                        ],
                      },
                      nodes: [
                        {
                          sourcePosition: "bottom",
                          targetPosition: "top",
                          node: {
                            id: "7",
                            type: "rectangle",
                            data: {
                              title: "Customer Feedback",
                              description: "Feedback recieved from customer",
                              icon: "auth",
                            },
                            position: {
                              x: 577,
                              y: 241 + 122,
                            },
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    ],
  },
];

const getLayoutedElements = (nodes, edges, direction = "TB") => {
  // const isHorizontal = direction === 'LR';
  dagreGraph.setGraph({ rankdir: direction });

  nodes.forEach((node) => {
    // console.log(node)
    dagreGraph.setNode(node.id, {
      width: node.width || nodeWidth,
      height: node.height || nodeHeight,
    });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  nodes.forEach((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    // node.targetPosition = isHorizontal ? 'left' : 'top';
    // node.sourcePosition = isHorizontal ? 'right' : 'bottom';

    // We are shifting the dagre node position (anchor=center center) to the top left
    // so it matches the React Flow node anchor point (top left).
    node.position = {
      x: nodeWithPosition.x - nodeWidth / 2,
      y: nodeWithPosition.y - nodeHeight / 2,
    };
    return node;
  });

  return { nodes, edges };
};

// const { edges: lEdges, nodes: lNodes } = getLayoutedElements(sampleNodes, sampleEdges);

// working code

const sampleNodes = [
  {
    id: "1",
    type: "rectangle",
    data: {
      title: "Intent Detection",
      description: "Reading Customer Conversation",
      icon: "bot",
      handles: [
        {
          position: "bottom",
          id: "node1-bottom",
          type: "source",
        },
      ],
    },
    width: 271,
    height: 62,
    position: {
      x: 0,
      y: 0,
    },
  },
  {
    id: "2",
    type: "rectangle",
    data: {
      title: "Customer Authentication",
      description: "Ask for Mobile Number",
      icon: "auth",
      handles: [
        {
          position: "top",
          id: "node2-top",
          type: "target",
        },
        {
          position: "bottom",
          id: "node2-bottom",
          type: "source",
        },
      ],
    },
    width: 239,
    height: 62,
    position: {
      x: 0,
      y: 0,
    },
  },
  {
    id: "3",
    type: "rectangle",
    data: {
      title: "Yes",
      description: "Authenticated",
      icon: "correct",
      variant: "green",
      handles: [
        {
          position: "top",
          id: "node3-top",
          type: "target",
        },
        {
          position: "left",
          id: "node3-left",
          type: "source",
        },
        {
          position: "right",
          id: "node3-right",
          type: "source",
        },
      ],
    },
    width: 140,
    height: 56,
    position: {
      x: 0,
      y: 0,
    },
  },
  {
    id: "4",
    type: "rectangle",
    data: {
      title: "Collect Account Details",
      description: "PCI Compliant",
      icon: "pci",
      handles: [
        {
          position: "right",
          id: "node4-right",
          type: "target",
        },
        {
          position: "bottom",
          id: "node4-bottom",
          type: "source",
        },
      ],
    },
    width: 227,
    height: 62,
    position: {
      x: 0,
      y: 0,
    },
  },
  {
    id: "5",
    type: "rectangle",
    data: {
      title: "Return Details to Customer",
      description: "Send Message",
      icon: "telegram",
      handles: [
        {
          position: "left",
          id: "node5-left",
          type: "target",
        },
        {
          position: "bottom",
          id: "node5-bottom",
          type: "source",
        },
      ],
    },
    width: 253,
    height: 63,
    position: {
      x: 0,
      y: 0,
    },
  },
  {
    id: "6",
    type: "rectangle",
    data: {
      title: "Raised Complaint",
      description: "Complaint raised to service",
      icon: "bot",
      handles: [
        {
          position: "top",
          id: "node6-top",
          type: "target",
        },
      ],
    },
    width: 242,
    height: 62,
    position: {
      x: 0,
      y: 0,
    },
  },
  {
    id: "7",
    type: "rectangle",
    data: {
      title: "Customer Feedback",
      description: "Feedback recieved from customer",
      icon: "auth",
      handles: [
        {
          position: "top",
          id: "node7-top",
          type: "target",
        },
      ],
    },
    width: 278,
    height: 62,
    position: {
      x: 0,
      y: 0,
    },
  },
];

const sampleEdges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    sourcePosition: "bottom",
    targetPosition: "top",
    sourceHandle: "node1-bottom",
    targetHandle: "node2-top",
    type: "smoothstep",
  },
  {
    id: "e2-3",
    source: "2",
    target: "3",
    sourcePosition: "bottom",
    targetPosition: "top",
    sourceHandle: "node2-bottom",
    targetHandle: "node3-top",
    type: "smoothstep",
  },
  {
    id: "e3-4",
    source: "3",
    target: "4",
    sourcePosition: "left",
    targetPosition: "right",
    sourceHandle: "node3-left",
    targetHandle: "node4-right",
    type: "smoothstep",
  },
  {
    id: "e3-5",
    source: "3",
    target: "5",
    sourcePosition: "right",
    targetPosition: "left",
    sourceHandle: "node3-right",
    targetHandle: "node5-left",
    type: "smoothstep",
  },
  {
    id: "e4-6",
    source: "4",
    target: "6",
    sourcePosition: "bottom",
    targetPosition: "top",
    sourceHandle: "node4-bottom",
    targetHandle: "node6-top",
    type: "smoothstep",
  },
  {
    id: "e5-7",
    source: "5",
    target: "7",
    sourcePosition: "bottom",
    targetPosition: "top",
    sourceHandle: "node5-bottom",
    targetHandle: "node7-top",
    type: "smoothstep",
  },
];

const HEIGHT_OFFSET = 75;
const WIDTH_OFFSET = 75;

function solve(nodes, edges) {
  const rootNode = nodes[0];
  rootNode.position = { x: 0, y: 0 };

  function rec(node) {
    if (!node) return;

    (getOutgoers(node, nodes, edges) || []).forEach((outerNode) => {
      const edge = edges.find(
        (edge) => edge.source === node.id && edge.target === outerNode.id
      );

      // base case if edge not available

      const sourceX = node.position.x;
      const sourceY = node.position.y;

      if (!outerNode.position) outerNode.position = {};

      if (edge.sourcePosition === "bottom" && edge.targetPosition === "top") {
        // bottom to top
        const diff = (node.width - outerNode.width) / 2;

        outerNode.position.x = sourceX + diff;
        outerNode.position.y = sourceY + node.height + HEIGHT_OFFSET;
      } else if (
        edge.sourcePosition === "left" &&
        edge.targetPosition === "right"
      ) {
        // left to right
        const diff = (node.height - outerNode.height) / 2;

        outerNode.position.x = sourceX - WIDTH_OFFSET - outerNode.width;
        outerNode.position.y = sourceY + diff;
      } else if (
        edge.sourcePosition === "right" &&
        edge.targetPosition === "left"
      ) {
        // right to left
        const diff = (node.height - outerNode.height) / 2;

        outerNode.position.x = sourceX + WIDTH_OFFSET + node.width;
        outerNode.position.y = sourceY + diff;
      }

      rec(outerNode);
    });
  }

  rec(rootNode);
}

solve(sampleNodes, sampleEdges);

// const [ref, { height }] = useMeasure();

const onLayout = useCallback(
  (direction) => {
    const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
      nodes,
      edges,
      direction
    );

    setNodes([...layoutedNodes]);
    setEdges([...layoutedEdges]);
  },
  [nodes, edges]
);
