'use client';

import * as React from 'react';
import {
    Brain,
    ChartNoAxesCombined,
    ClipboardPlus,
    Landmark,
    LayoutDashboardIcon,
    LogOut,
    SettingsIcon,
    UserRoundPen,
} from 'lucide-react';

import { NavMain } from '@/components/nav-main';
import { NavSecondary } from '@/components/nav-secondary';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
} from '@/components/ui/sidebar';

const data = {
    user: {
        name: 'test',
        email: 'test@example.com',
        avatar: '/avatars/shadcn.jpg',
    },
    navMain: [
        {
            title: 'Dashboard',
            url: '/dashboard',
            icon: LayoutDashboardIcon,
        },
        {
            title: 'Gráficos',
            url: '/dashboard/graphics',
            icon: ChartNoAxesCombined,
        },
        {
            title: 'Gerenciamento de usuários',
            url: '/dashboard/users',
            icon: UserRoundPen,
        },
        {
            title: 'Gerenciamento de Instituições',
            url: '/dashboard/institutions',
            icon: Landmark,
        },
        {
            title: 'Gerenciamento de Pacientes',
            url: '/dashboard/patients',
            icon: Brain,
        },
        {
            title: 'Gerenciamento de Coletas',
            url: '/dashboard/collections',
            icon: ClipboardPlus,
        },
    ],

    navSecondary: [
        {
            title: 'Sair',
            icon: LogOut,
        },
    ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="offcanvas" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    {/* <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <Link href="#">
                <ArrowUpCircleIcon className="h-5 w-5" />
                <span className="text-base font-semibold">Acme Inc.</span>
              </Link>
            </SidebarMenuButton> */}
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
                <NavSecondary items={data.navSecondary} className="mt-auto" />
            </SidebarContent>
            {/* <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter> */}
        </Sidebar>
    );
}
