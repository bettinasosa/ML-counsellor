import React from 'react';type Props = {    contextInfo: {        inContextMessages: number;        outOfContextMessages: number;        summary: string;    };};export default function ContextWindowVisualizer({ contextInfo }: Props) {    const totalMessages = contextInfo.inContextMessages + contextInfo.outOfContextMessages;    const inContextPercentage = totalMessages > 0 ? (contextInfo.inContextMessages / totalMessages) * 100 : 0;    console.log('contextInfo', contextInfo);    return (        <div className="mt-4 p-4 bg-white rounded shadow">            <h2 className="text-xl font-bold mb-2">Counselor notes:</h2>            <div className="relative h-8 bg-gray-200 rounded">                <div                    className="absolute left-0 top-0 h-full bg-blue-500 rounded"                    style={{ width: `${inContextPercentage}%` }}                ></div>            </div>            <div className="mt-2 flex justify-between text-sm">                <span>In Context: {contextInfo.inContextMessages}</span>                <span>Out of Context: {contextInfo.outOfContextMessages}</span>            </div>            <div className="mt-4">                <h3 className="font-bold">Session summary:</h3>                <p className="mt-1 text-sm">                    {contextInfo.summary || "No summary available yet. As the conversation progresses, a summary will be generated to provide context."}                </p>            </div>        </div>    );}