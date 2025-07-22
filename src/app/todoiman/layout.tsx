export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
          <header
          style={{
            backgroundColor:"white",           
            textAlign:"center",
            verticalAlign:"top",
            color:"darkblue",
            fontFamily:"trebuchet ms",
            fontSize:"150%"
            }}>
                
            <b>
                To-Do List 📝
            </b>

          </header>

          <main>{children}</main>
        </body>
      </html>
    )
  }
