export default function Slogan() {
    let todaySlogan = "“Enrich your life today. Yesterday is history, and tomorrow is mystery.”";
    return (
        <div style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            backgroundColor: "rgba(250, 233, 137, 0.8)",
            height: "100px"
        }}>
            <h1 style={{ paddingTop: "1.5%", paddingBottom: "3%", fontStyle: "oblique" }}> {todaySlogan}</h1>
        </div>
    )
}