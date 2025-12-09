import { useParams } from "next/navigation"

export default function Room() {
    const params = useParams()
    const roomId = params.roomId as string
  return (
    <div>
      <h1>Room {roomId}</h1>
    </div>
  )
}