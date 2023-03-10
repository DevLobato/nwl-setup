interface HabitProps {
    completed: number
}

export function Habit(props: HabitProps) {
    return (    
        <p className="bg-violet-900 w-10 h-10 text-gray-900 font-extrabold rounded m-2 flex items-center justify-center">{props.completed}</p>
    )
}