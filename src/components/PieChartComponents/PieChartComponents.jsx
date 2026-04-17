'use client'
import { useTimeline } from '@/context/TimelineContext';
import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

const PieChartComponents = () => {

    // all call text video data
    const { call, text, video } = useTimeline()

    // all data
    const data = [
        { name: "Call", value: call.length, fill: "#244D3F" },
        { name: "Text", value: text.length, fill: "#7E35E1" },
        { name: "Video", value: video.length, fill: "#37A163" },
    ]


    return (
        <div className='flex flex-col justify-center items-center gap-4'>
            <ResponsiveContainer width="100%" height={252} maxWidth={347}>
                <PieChart>
                    <Pie
                        data={data}
                        innerRadius="80%"
                        outerRadius="100%"
                        // Corner radius is the rounded edge of each pie slice
                        cornerRadius="50%"
                        fill="#8884d8"
                        // padding angle is the gap between each pie slice
                        paddingAngle={5}
                        dataKey="value"
                        isAnimationActive={true}
                    />
                    <Legend wrapperStyle={{ paddingTop: '24px' }} />
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
            
        </div>
    );
};

export default PieChartComponents;