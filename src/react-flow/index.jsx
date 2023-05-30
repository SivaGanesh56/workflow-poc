import React, { useCallback, useEffect, useRef } from 'react';
import ReactFlow, {
    addEdge,
    MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
} from 'reactflow';

import { nodes as initialNodes, edges as initialEdges, transformData, updateNodePositions } from './initial-elements';
import CustomNode from './CustomNode';

import 'reactflow/dist/style.css';
import './overview.css';
import LocalNode from './LocalNode';
import { shapes } from './Shapes';
import { useMeasure } from 'react-use';


const nodeTypes = {
    custom: CustomNode,
    local: LocalNode,
    ...shapes,
};

const minimapStyle = {
    height: 120,
};

const onInit = (reactFlowInstance) => console.log('flow loaded:', reactFlowInstance);

const { nodes: transformedNodes, edges: transformedEdges } = transformData(initialNodes, initialEdges);

const OverviewFlow = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState(transformedNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(transformedEdges);
    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);


    const [ref, { height }] = useMeasure();

    useEffect(() => {
        if (height) {
            const clonedNodes = JSON.parse(JSON.stringify(nodes));

            clonedNodes[0] = {
                ...clonedNodes[0],
                position: {
                    x: 0,
                    y: -200
                }
            }

            updateNodePositions(clonedNodes[0], clonedNodes, edges)
            setNodes(clonedNodes);
        }

    }, [height])

    if (!height) {
        return (
            <div className='react-flow-container' ref={ref}>
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    onInit={onInit}
                    fitView
                    fitViewOptions={{
                        maxZoom: 1
                    }}
                    attributionPosition="top-right"
                    nodeTypes={nodeTypes}

                >
                    <MiniMap style={minimapStyle} zoomable pannable />
                    <Controls />

                    <Background color="#aaa" gap={16} />
                </ReactFlow>
            </div>
        );
    }

    console.log(nodes);


    return (
        <div className='react-flow-container'>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onInit={onInit}
                fitView
                fitViewOptions={{
                    maxZoom: 1
                }}
                attributionPosition="top-right"
                nodeTypes={nodeTypes}

            >
                {/* <MiniMap style={minimapStyle} zoomable pannable /> */}
                {/* <Controls /> */}

                <Background color="#aaa" gap={16} />
            </ReactFlow>
        </div>
    );
};

export default OverviewFlow;
