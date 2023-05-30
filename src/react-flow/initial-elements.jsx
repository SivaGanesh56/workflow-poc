import React from "react";
import { MarkerType, Position, getOutgoers } from "reactflow";

export const nodes = [
  {
    "id": "1",
    "type": "rectangle",
    "data": {
      "title": "Intent Detection",
      "description": "Reading Customer Conversation",
      "icon": "bot"
    },
  },
  {
    "id": "2",
    "type": "rectangle",
    "data": {
      "title": "Customer Authentication",
      "description": "Ask for Mobile Number",
      "icon": "auth"
    },
  },
  {
    "id": "3",
    "type": "rhombus",
    "data": {
      "title": "Is the Mobile Number Registered?",
      "icon": "pci"
    },
  },
  {
    "id": "4",
    "type": "rectangle",
    "data": {
      "title": "Yes",
      "description": "Authenticated",
      "icon": "correct",
      "variant": "green"
    },
  },
  {
    "id": "5",
    "type": "rectangle",
    "data": {
      "title": "Collect Account Details",
      "description": "PCI Compliant",
      "icon": "pci"
    },
  },
  {
    "id": "6",
    "type": "rectangle",
    "data": {
      "title": "Return Details to Customer",
      "description": "Send Message",
      "icon": "telegram"
    },
  },
  {
    "id": "7",
    "type": "rectangle",
    "data": {
      "title": "Raised Complaint",
      "description": "Complaint raised to service",
      "icon": "bot"
    },
  },
  {
    "id": "8",
    "type": "rectangle",
    "data": {
      "title": "Customer Feedback",
      "description": "Feedback recieved from customer",
      "icon": "auth"
    },
  },
];

export const edges = [
  {
    "id": "e1-2",
    "source": "1",
    "target": "2",
    "sourcePosition": "bottom",
    "targetPosition": "top",
    "type": "smoothstep"
  },
  {
    "id": "e2-3",
    "source": "2",
    "target": "3",
    "sourcePosition": "bottom",
    "targetPosition": "top",
    "type": "smoothstep"
  },
  {
    "id": "e3-4",
    "source": "3",
    "target": "4",
    "sourcePosition": "left",
    "targetPosition": "right",
    "type": "smoothstep"
  },
  {
    "id": "e3-5",
    "source": "3",
    "target": "5",
    "sourcePosition": "right",
    "targetPosition": "left",
    "type": "smoothstep"
  },
  {
    "id": "e4-6",
    "source": "4",
    "target": "6",
    "sourcePosition": "bottom",
    "targetPosition": "top",
    "type": "smoothstep"
  },
  {
    "id": "e5-7",
    "source": "5",
    "target": "7",
    "sourcePosition": "bottom",
    "targetPosition": "top",
    "type": "smoothstep"
  },
  {
    "id": "e6-8",
    "source": "6",
    "target": "8",
    "sourcePosition": "bottom",
    "targetPosition": "top",
    "type": "smoothstep"
  },
]


const HEIGHT_OFFSET = 75;
const WIDTH_OFFSET = 75;

// make it pure function
export function transformData(nodes, edges) {
  const clonedNodes = JSON.parse(JSON.stringify(nodes));
  const clonedEdges = JSON.parse(JSON.stringify(edges));

  const updatedNodes = clonedNodes.map((node) => {
    const { id, type, data, ...rest } = node;
    return {
      ...rest,
      id,
      type,
      data: {
        ...data,
        handles: [],
      },
      position: { x: 0, y: 0 },
    };
  });

  const updatedEdges = clonedEdges.map((edge) => {
    const { source, target, sourcePosition, targetPosition } = edge;

    const sourceHandleId = `node${source}-${sourcePosition}`;
    const targetHandleId = `node${target}-${targetPosition}`;

    const sourceNode = updatedNodes.find((node) => node.id === source);
    const targetNode = updatedNodes.find((node) => node.id === target);

    if (sourceNode) {
      const sourceHandle = {
        position: sourcePosition,
        id: sourceHandleId,
        type: 'source',
      };

      sourceNode.data.handles.push(sourceHandle);
    }

    if (targetNode) {
      const targetHandle = {
        position: targetPosition,
        id: targetHandleId,
        type: 'target',
      };

      targetNode.data.handles.push(targetHandle);
    }

    return {
      ...edge,
      sourceHandle: sourceHandleId,
      targetHandle: targetHandleId,
    };
  });

  return { nodes: updatedNodes, edges: updatedEdges };
}

export function updateNodePositions(sourceNode, nodes, edges) {
  if (!sourceNode) return;

  getOutgoers(sourceNode, nodes, edges).forEach((targetNode) => {
    const edge = edges.find(
      (edge) => edge.source === sourceNode.id && edge.target === targetNode.id
    );

    if (edge) {
      updateNodePosition(sourceNode, targetNode, edge);
    }

    updateNodePositions(targetNode, nodes, edges);
  });
}

function updateNodePosition(sourceNode, targetNode, edge) {
  const sourceX = sourceNode.position.x;
  const sourceY = sourceNode.position.y;

  if (edge.sourcePosition === 'bottom' && edge.targetPosition === 'top') {
    // bottom to top
    const diff = (sourceNode.width - targetNode.width) / 2;

    targetNode.position.x = sourceX + diff;
    targetNode.position.y = sourceY + sourceNode.height + HEIGHT_OFFSET;
  } else if (
    edge.sourcePosition === 'left' &&
    edge.targetPosition === 'right'
  ) {
    // left to right
    const diff = (sourceNode.height - targetNode.height) / 2;

    targetNode.position.x = sourceX - WIDTH_OFFSET - targetNode.width;
    targetNode.position.y = sourceY + diff;
  } else if (
    edge.sourcePosition === 'right' &&
    edge.targetPosition === 'left'
  ) {
    // right to left
    const diff = (sourceNode.height - targetNode.height) / 2;

    targetNode.position.x = sourceX + WIDTH_OFFSET + sourceNode.width;
    targetNode.position.y = sourceY + diff;
  }
}


