import {
    Sidebar,
    SidebarContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarFooter
  } from "@/components/ui/sidebar"

  const items = [
    {
        title: "About Me",
        subtitle: "(Professional and Research Experience)",
        url: "#",
    },
    {
        title: "Masters Thesis",
        subtitle: "(Evolution of a Useful Place: The Gas Station in America)",
        url: "#",
    },
    {
        title: "City Speak",
        subtitle: "(Substack)",
        url: "#",
    },
    {
        title: "Dedicated Co",
        subtitle: "(Web Design & Development Consulting)",
        url: "#",
    },
  ]
  
  export function AppSidebar() {
    return (
      <Sidebar>
        <SidebarHeader />
        <SidebarContent>
        <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <span>{item.title}</span>
                      <span>{item.subtitle}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
    )
  }
  