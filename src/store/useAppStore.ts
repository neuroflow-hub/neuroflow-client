export interface ContextMenuState {
    x: number;
    y: number;
    nodeId: string;
    nodeType?: string;
}

export interface EdgeContextMenuState {
    x: number;
    y: number;
    edgeId: string;
}

export interface AppState {
    theme: 'light' | 'dark' | 'system';
    activeNodeId: string | null;
    edgeType: 'default' | 'straight' | 'step' | 'smoothstep' | 'simplebezier';
    nodeInfo: any;
    isNodeInfoOpen: boolean;
    appFont: string;
    isSettingsModalOpen: boolean;
    nodeContextMenu: ContextMenuState | null;
    edgeContextMenu: EdgeContextMenuState | null;
    setTheme: (theme: 'light' | 'dark' | 'system') => void;
    setActiveNodeId: (nodeId: string | null) => void;
    setEdgeType: (type: 'default' | 'straight' | 'step' | 'smoothstep' | 'simplebezier') => void;
    setNodeInfo: (info: any) => void;
    closeNodeInfo: () => void;
    setAppFont: (font: string) => void;
    setIsSettingsModalOpen: (isOpen: boolean) => void;
    setNodeContextMenu: (menu: ContextMenuState | null) => void;
    setEdgeContextMenu: (menu: EdgeContextMenuState | null) => void;
}

import { create } from 'zustand';

export const useAppStore = create<AppState>((set) => ({
    theme: 'light',
    activeNodeId: null,
    edgeType: 'smoothstep',
    nodeInfo: null,
    isNodeInfoOpen: false,
    appFont: 'Inter',
    isSettingsModalOpen: false,
    nodeContextMenu: null,
    edgeContextMenu: null,
    setTheme: (theme) => set({ theme }),
    setActiveNodeId: (activeNodeId) => set({ activeNodeId }),
    setEdgeType: (edgeType) => set({ edgeType }),
    setNodeInfo: (info) => set({ nodeInfo: info, isNodeInfoOpen: true }),
    closeNodeInfo: () => set({ nodeInfo: null, isNodeInfoOpen: false }),
    setAppFont: (appFont) => set({ appFont }),
    setIsSettingsModalOpen: (isSettingsModalOpen) => set({ isSettingsModalOpen }),
    setNodeContextMenu: (nodeContextMenu) => set({ nodeContextMenu }),
    setEdgeContextMenu: (edgeContextMenu) => set({ edgeContextMenu }),
}));
