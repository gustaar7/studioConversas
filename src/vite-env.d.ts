interface Window { desktop: { loadStore(): Promise<Store>; saveStore(value: Store): Promise<boolean>; chooseFiles(filters: {name:string; extensions:string[]}[]): Promise<string[]>; listMedia(kind: 'conversa'|'gameplay'): Promise<string[]>; chooseFolder(): Promise<string>; openPath(target:string): Promise<string>; probe(file:string): Promise<number>; encoder(requested:string): Promise<string>; render(payload: {jobs: RenderJob[]; settings: Settings}): Promise<boolean>; onProgress(cb:(value:ProgressEvent)=>void):()=>void } }
interface Store { settings: Settings; combinations: Combination[] }
interface Settings { prefix: string; suffix: string; outputDir: string; resolution: string; fps: number; quality: string; encoder: string }
interface Combination { conversa: string; gameplay: string }
interface RenderJob { id: string; output: string; conversa: string; gameplay: string }
interface ProgressEvent { id: string; progress: number; status: string; output?: string }
