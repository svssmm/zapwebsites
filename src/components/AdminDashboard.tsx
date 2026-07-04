"use client";

import { useState } from "react";
import { 
  addExample, deleteExample, 
  addPack, deletePack, 
  updateSiteSetting 
} from "@/app/actions/admin";
import { logout } from "@/app/actions/auth";
import { Trash2, Plus, LogOut, Settings, Briefcase, Package } from "lucide-react";

interface Example {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link?: string | null;
}

interface Pack {
  id: number;
  name: string;
  price: string;
  description: string;
  features: string[];
}

export default function AdminDashboard({ 
  initialExamples, 
  initialPacks, 
  initialSettings 
}: { 
  initialExamples: Example[], 
  initialPacks: Pack[], 
  initialSettings: Record<string, string> 
}) {
  const [activeTab, setActiveTab] = useState("examples");

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
        <div>
          <h1 className="text-4xl font-bold mb-2">Admin <span className="text-purple-500">Dashboard</span></h1>
          <p className="text-gray-400">Manage your business content from here.</p>
        </div>
        <button 
          onClick={() => logout()}
          className="flex items-center gap-2 bg-red-500/10 hover:bg-red-500/20 text-red-500 px-4 py-2 rounded-xl transition-all border border-red-500/20"
        >
          <LogOut size={18} /> Logout
        </button>
      </div>

      <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
        <TabButton active={activeTab === "examples"} onClick={() => setActiveTab("examples")} icon={<Briefcase size={18}/>} label="Examples" />
        <TabButton active={activeTab === "packs"} onClick={() => setActiveTab("packs")} icon={<Package size={18}/>} label="Packs" />
        <TabButton active={activeTab === "settings"} onClick={() => setActiveTab("settings")} icon={<Settings size={18}/>} label="Settings" />
      </div>

      <div className="glass-panel p-8 rounded-3xl border border-purple-500/20">
        {activeTab === "examples" && <ExamplesManager examples={initialExamples} />}
        {activeTab === "packs" && <PacksManager packs={initialPacks} />}
        {activeTab === "settings" && <SettingsManager settings={initialSettings} />}
      </div>
    </div>
  );
}

function TabButton({ active, onClick, icon, label }: any) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold transition-all whitespace-nowrap ${
        active ? "bg-purple-600 text-white" : "bg-white/5 text-gray-400 hover:bg-white/10"
      }`}
    >
      {icon} {label}
    </button>
  );
}

function ExamplesManager({ examples }: { examples: Example[] }) {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    await addExample(formData);
    e.currentTarget.reset();
  }

  return (
    <div className="space-y-12">
      <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6 bg-black/40 p-6 rounded-2xl border border-white/5">
        <div className="md:col-span-2 flex items-center gap-2 mb-2">
          <Plus className="text-purple-500" />
          <h3 className="text-xl font-bold">Add New Example</h3>
        </div>
        <input name="title" placeholder="Project Title" required className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-purple-500" />
        <input name="imageUrl" placeholder="Image URL" required className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-purple-500" />
        <input name="link" placeholder="Project Link (Optional)" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-purple-500" />
        <textarea name="description" placeholder="Description" required className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-purple-500 md:col-span-2 h-24" />
        <button type="submit" className="bg-purple-600 hover:bg-purple-700 py-3 rounded-xl font-bold transition-all md:col-span-2">Add Example</button>
      </form>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {examples.map(ex => (
          <div key={ex.id} className="relative group bg-white/5 rounded-2xl overflow-hidden border border-white/5">
            <img src={ex.imageUrl} alt={ex.title} className="w-full aspect-video object-cover" />
            <div className="p-4">
              <h4 className="font-bold">{ex.title}</h4>
              <button 
                onClick={() => deleteExample(ex.id)}
                className="absolute top-2 right-2 p-2 bg-red-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PacksManager({ packs }: { packs: Pack[] }) {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    await addPack(formData);
    e.currentTarget.reset();
  }

  return (
    <div className="space-y-12">
      <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6 bg-black/40 p-6 rounded-2xl border border-white/5">
        <div className="md:col-span-2 flex items-center gap-2 mb-2">
          <Plus className="text-purple-500" />
          <h3 className="text-xl font-bold">Add New Pack</h3>
        </div>
        <input name="name" placeholder="Pack Name" required className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-purple-500" />
        <input name="price" placeholder="Price (e.g. $99)" required className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-purple-500" />
        <textarea name="description" placeholder="Short Description" required className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-purple-500 md:col-span-2" />
        <textarea name="features" placeholder="Features (one per line)" required className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-purple-500 md:col-span-2 h-32" />
        <button type="submit" className="bg-purple-600 hover:bg-purple-700 py-3 rounded-xl font-bold transition-all md:col-span-2">Add Pack</button>
      </form>

      <div className="grid md:grid-cols-2 gap-6">
        {packs.map(p => (
          <div key={p.id} className="bg-white/5 p-6 rounded-2xl border border-white/5 flex justify-between items-start">
            <div>
              <h4 className="font-bold text-xl">{p.name}</h4>
              <p className="text-purple-500 font-bold">{p.price}</p>
            </div>
            <button 
              onClick={() => deletePack(p.id)}
              className="p-2 bg-red-500/20 hover:bg-red-500 text-red-500 hover:text-white rounded-lg transition-all"
            >
              <Trash2 size={18} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function SettingsManager({ settings }: { settings: Record<string, string> }) {
  const [localSettings, setLocalSettings] = useState(settings);

  async function handleUpdate(key: string, value: string) {
    await updateSiteSetting(key, value);
    setLocalSettings(prev => ({ ...prev, [key]: value }));
  }

  return (
    <div className="space-y-8 max-w-2xl mx-auto">
      <div className="space-y-6">
        <h3 className="text-xl font-bold mb-6">Site Configuration</h3>
        
        <SettingField 
          label="Instagram Username" 
          value={localSettings.instagram || ""} 
          onSave={(val: string) => handleUpdate("instagram", val)} 
        />
        <SettingField 
          label="Email Address" 
          value={localSettings.email || ""} 
          onSave={(val: string) => handleUpdate("email", val)} 
        />
        <SettingField 
          label="Phone Number" 
          value={localSettings.phone || ""} 
          onSave={(val: string) => handleUpdate("phone", val)} 
        />
        <SettingField 
          label="Whish Money Details" 
          value={localSettings.whishMoney || ""} 
          onSave={(val: string) => handleUpdate("whishMoney", val)} 
        />
      </div>
    </div>
  );
}

function SettingField({ label, value, onSave }: any) {
  const [val, setVal] = useState(value);
  return (
    <div className="space-y-2">
      <label className="text-sm text-gray-500 uppercase font-bold">{label}</label>
      <div className="flex gap-2">
        <input 
          value={val} 
          onChange={(e) => setVal(e.target.value)}
          className="flex-grow bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-purple-500" 
        />
        <button 
          onClick={() => onSave(val)}
          className="bg-purple-600 hover:bg-purple-700 px-6 rounded-xl font-bold transition-all"
        >
          Save
        </button>
      </div>
    </div>
  );
}
