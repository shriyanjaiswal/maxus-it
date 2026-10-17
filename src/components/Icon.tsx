import {
  ArrowRight,
  BarChart3,
  Boxes,
  ChartNoAxesCombined,
  CheckCircle2,
  Clock,
  Code2,
  Cpu,
  FileText,
  Gauge,
  Globe2,
  GraduationCap,
  Handshake,
  Headphones,
  Layers,
  LayoutDashboard,
  Linkedin,
  Facebook,
  Twitter,
  Youtube,
  Mail,
  MapPin,
  MessageCircle,
  MonitorSmartphone,
  Phone,
  Puzzle,
  ReceiptText,
  Search,
  ShieldCheck,
  Smartphone,
  Target,
  Users,
  Workflow,
  type LucideIcon,
} from 'lucide-react'

const icons: Record<string, LucideIcon> = {
  'arrow-right': ArrowRight,
  'bar-chart-3': BarChart3,
  boxes: Boxes,
  'chart-no-axes-combined': ChartNoAxesCombined,
  'check-circle-2': CheckCircle2,
  clock: Clock,
  'code-2': Code2,
  cpu: Cpu,
  'file-text': FileText,
  gauge: Gauge,
  globe: Globe2,
  'graduation-cap': GraduationCap,
  handshake: Handshake,
  headphones: Headphones,
  layers: Layers,
  'layout-dashboard': LayoutDashboard,
  linkedin: Linkedin,
  facebook: Facebook,
  twitter: Twitter,
  youtube: Youtube,
  mail: Mail,
  mapPin: MapPin,
  message: MessageCircle,
  'monitor-smartphone': MonitorSmartphone,
  phone: Phone,
  puzzle: Puzzle,
  'receipt-text': ReceiptText,
  search: Search,
  'shield-check': ShieldCheck,
  smartphone: Smartphone,
  target: Target,
  users: Users,
  workflow: Workflow,
}

type IconProps = {
  name: string
  className?: string
  strokeWidth?: number
}

export function Icon({ name, className = 'size-5', strokeWidth = 1.8 }: IconProps) {
  const Glyph = icons[name] ?? CheckCircle2
  return <Glyph className={className} strokeWidth={strokeWidth} aria-hidden="true" />
}
