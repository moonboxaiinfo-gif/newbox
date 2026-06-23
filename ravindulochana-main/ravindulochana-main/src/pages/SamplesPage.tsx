import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLang, B } from '../context/LanguageContext';
import {
  ArrowLeft, Lock, Unlock, Plus, X, ExternalLink, Eye,
  Upload, ImageIcon, Trash2, CheckCircle2, Link as LinkIcon,
  Shield, LogOut, Pencil, Play, Video, AlertTriangle,
} from 'lucide-react';

type Pack = 'starter' | 'growth' | 'dominate';
type MediaType = 'image' | 'video';
type Category = 'Web' | 'Bot' | 'Social Media';

const PACK_META: Record<Pack, { enName: string; siName: string; desc: string }> = {
  starter: {
    enName: 'Starter Pack',
    siName: 'ආරම්භක පැකේජය',
    desc: 'Clean minimalist websites built for new businesses.',
  },
  growth: {
    enName: 'Growth Pack',
    siName: 'දියුණු වන පැකේජය',
    desc: 'Multi-page platforms with automation and analytics.',
  },
  dominate: {
    enName: 'Dominate Pack',
    siName: 'ආධිපත්‍ය පැකේජය',
    desc: 'Enterprise-grade digital ecosystems for market leaders.',
  },
};

interface Sample {
  id: string;
  title: string;
  category: Category;
  mediaType: MediaType;
  url: string;
  thumbnail?: string;
  isCustom?: boolean;
}

const DEFAULT_SAMPLES: Record<Pack, Sample[]> = {
  starter: [
    { id: 's1', title: 'Minimalist Business Site', category: 'Web', mediaType: 'image', url: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 's2', title: 'Clean Product Landing', category: 'Web', mediaType: 'image', url: 'https://images.pexels.com/photos/326502/pexels-photo-326502.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 's3', title: 'Local Service Website', category: 'Web', mediaType: 'image', url: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 's4', title: 'Restaurant One-Pager', category: 'Web', mediaType: 'image', url: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 's5', title: 'WhatsApp Greeting Bot', category: 'Bot', mediaType: 'image', url: 'https://images.pexels.com/photos/147413/twitter-facebook-together-147413.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 's6', title: 'Social Media Graphics Set', category: 'Social Media', mediaType: 'image', url: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800' },
  ],
  growth: [
    { id: 'g1', title: 'E-Commerce Platform', category: 'Web', mediaType: 'image', url: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 'g2', title: 'Booking & Appointment System', category: 'Web', mediaType: 'image', url: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 'g3', title: 'Analytics Dashboard', category: 'Web', mediaType: 'image', url: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 'g4', title: 'WhatsApp Product Catalog Bot', category: 'Bot', mediaType: 'image', url: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 'g5', title: 'Premium Social Posts (15x)', category: 'Social Media', mediaType: 'image', url: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 'g6', title: 'Promo Reel Preview', category: 'Social Media', mediaType: 'image', url: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 'g7', title: 'SEO Report Dashboard', category: 'Web', mediaType: 'image', url: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 'g8', title: 'Multi-Page Salon Site', category: 'Web', mediaType: 'image', url: 'https://images.pexels.com/photos/3993449/pexels-photo-axx/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800' },
  ],
  dominate: [
    { id: 'd1', title: 'Corporate HQ Platform', category: 'Web', mediaType: 'image', url: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 'd2', title: 'Global E-Commerce Ecosystem', category: 'Web', mediaType: 'image', url: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 'd3', title: 'AI WhatsApp Command Center', category: 'Bot', mediaType: 'image', url: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 'd4', title: 'Brand Documentary', category: 'Social Media', mediaType: 'image', url: 'https://images.pexels.com/photos/2608519/pexels-photo-2608519.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 'd5', title: '30x Monthly Content Calendar', category: 'Social Media', mediaType: 'image', url: 'https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 'd6', title: 'Custom Admin Dashboard', category: 'Web', mediaType: 'image', url: 'https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 'd7', title: 'Enterprise CRM Integration', category: 'Web', mediaType: 'image', url: 'https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=800' },
  ],
};

const CATEGORIES: Category[] = ['Web', 'Bot', 'Social Media'];
const ADMIN_PASSWORD = 'moonbox2026';
const LS_KEY = (pack: Pack) => `moonbox_gallery_${pack}`;

function loadCustom(pack: Pack): Sample[] {
  try {
    const raw = localStorage.getItem(LS_KEY(pack));
    return raw ? (JSON.parse(raw) as Sample[]) : [];
  } catch { return []; }
}

function saveCustom(pack: Pack, samples: Sample[]) {
  try {
    localStorage.setItem(LS_KEY(pack), JSON.stringify(samples));
  } catch { /* ignore */ }
}

// Extract YouTube video ID from URL
function getYouTubeId(url: string): string | null {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\s?]+)/);
  return match ? match[1] : null;
}

// Extract Vimeo ID from URL
function getVimeoId(url: string): string | null {
  const match = url.match(/vimeo\.com\/(\d+)/);
  return match ? match[1] : null;
}

export default function SamplesPage() {
  const { pack: packParam } = useParams<{ pack: string }>();
  const navigate = useNavigate();
  const { lang } = useLang();

  const pack: Pack = (packParam as Pack) || 'starter';
  const meta = PACK_META[pack] ?? PACK_META.starter;
  const packName = lang === 'en' ? meta.enName : meta.siName;

  const [customSamples, setCustomSamples] = useState<Sample[]>(() => loadCustom(pack));
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [lightboxVideo, setLightboxVideo] = useState<string | null>(null);

  // Admin state
  const [adminUnlocked, setAdminUnlocked] = useState(false);
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [pwValue, setPwValue] = useState('');
  const [pwError, setPwError] = useState(false);

  // Add sample form
  const [addCategory, setAddCategory] = useState<Category>('Web');
  const [addTitle, setAddTitle] = useState('');
  const [addMediaType, setAddMediaType] = useState<MediaType>('image');
  const [addUrl, setAddUrl] = useState('');
  const [addThumbnail, setAddThumbnail] = useState('');
  const [addMode, setAddMode] = useState<'url' | 'upload'>('url');
  const [uploadedDataUrl, setUploadedDataUrl] = useState('');
  const [uploadFileName, setUploadFileName] = useState('');
  const [addSuccess, setAddSuccess] = useState(false);
  const [addError, setAddError] = useState('');
  const fileRef = useRef<HTMLInputElement>(null);

  // Edit state
  const [editingSample, setEditingSample] = useState<Sample | null>(null);
  const [editTitle, setEditTitle] = useState('');
  const [editUrl, setEditUrl] = useState('');
  const [editMediaType, setEditMediaType] = useState<MediaType>('image');
  const [editThumbnail, setEditThumbnail] = useState('');
  const [editError, setEditError] = useState('');
  const [editSuccess, setEditSuccess] = useState(false);

  // Delete confirmation state
  const [deletingSample, setDeletingSample] = useState<Sample | null>(null);

  // Reload custom samples when pack changes
  useEffect(() => {
    setCustomSamples(loadCustom(pack));
  }, [pack]);

  const allSamples = [...DEFAULT_SAMPLES[pack], ...customSamples];

  // Group samples by category
  const samplesByCategory: Record<Category, Sample[]> = {
    Web: allSamples.filter(s => s.category === 'Web'),
    Bot: allSamples.filter(s => s.category === 'Bot'),
    'Social Media': allSamples.filter(s => s.category === 'Social Media'),
  };

  /* ── Password Prompt ─────────────────────────── */
  const attemptUnlock = () => {
    if (pwValue === ADMIN_PASSWORD) {
      setAdminUnlocked(true);
      setShowPasswordPrompt(false);
      setPwError(false);
      setPwValue('');
    } else {
      setPwError(true);
    }
  };

  /* ── Logout ──────────────────────────────────── */
  const handleLogout = () => {
    setAdminUnlocked(false);
    setShowAdminModal(false);
  };

  /* ── File upload -> base64 ────────────────────── */
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 10 * 1024 * 1024) {
      setAddError('File too large (max 10 MB).');
      return;
    }
    const reader = new FileReader();
    reader.onload = (ev) => {
      setUploadedDataUrl(ev.target?.result as string);
      setUploadFileName(file.name);
      setAddError('');
      // Auto-detect media type
      if (file.type.startsWith('video/')) {
        setAddMediaType('video');
      } else {
        setAddMediaType('image');
      }
    };
    reader.readAsDataURL(file);
  };

  /* ── Add Sample ──────────────────────────────── */
  const handleAddSample = () => {
    const url = addMode === 'url' ? addUrl.trim() : uploadedDataUrl;
    if (!addTitle.trim()) { setAddError('Please enter a title.'); return; }
    if (!url) { setAddError('Please provide an image or video URL.'); return; }

    const isVideo = addMediaType === 'video';
    const thumbnail = addThumbnail.trim() || undefined;

    const newSample: Sample = {
      id: `custom_${Date.now()}`,
      title: addTitle.trim(),
      category: addCategory,
      mediaType: isVideo ? 'video' : 'image',
      url,
      thumbnail: isVideo ? thumbnail : undefined,
      isCustom: true,
    };
    const updated = [...customSamples, newSample];
    setCustomSamples(updated);
    saveCustom(pack, updated);

    // Reset form
    setAddTitle('');
    setAddUrl('');
    setAddThumbnail('');
    setUploadedDataUrl('');
    setUploadFileName('');
    setAddError('');
    setAddSuccess(true);
    setTimeout(() => setAddSuccess(false), 2500);
  };

  /* ── Open add modal for specific category ───── */
  const openAddForCategory = (category: Category) => {
    setAddCategory(category);
    setShowAdminModal(true);
  };

  /* ── Edit Sample ─────────────────────────────── */
  const openEditModal = (sample: Sample) => {
    setEditingSample(sample);
    setEditTitle(sample.title);
    setEditUrl(sample.url);
    setEditMediaType(sample.mediaType);
    setEditThumbnail(sample.thumbnail || '');
    setEditError('');
    setEditSuccess(false);
  };

  const handleEditSample = () => {
    if (!editingSample) return;
    if (!editTitle.trim()) { setEditError('Please enter a title.'); return; }
    if (!editUrl.trim()) { setEditError('Please provide a URL.'); return; }

    // Check if it's a default sample - create a custom override
    const isDefault = !editingSample.isCustom;
    let updated: Sample[];

    if (isDefault) {
      // Create a custom version that overrides the default
      const customVersion: Sample = {
        ...editingSample,
        id: `custom_${Date.now()}`,
        title: editTitle.trim(),
        url: editUrl.trim(),
        mediaType: editMediaType,
        thumbnail: editMediaType === 'video' ? editThumbnail.trim() || undefined : undefined,
        isCustom: true,
      };
      updated = [...customSamples, customVersion];
    } else {
      // Update existing custom sample
      updated = customSamples.map(s =>
        s.id === editingSample.id
          ? { ...s, title: editTitle.trim(), url: editUrl.trim(), mediaType: editMediaType, thumbnail: editMediaType === 'video' ? editThumbnail.trim() || undefined : undefined }
          : s
      );
    }

    setCustomSamples(updated);
    saveCustom(pack, updated);
    setEditingSample(null);
    setEditSuccess(true);
    setTimeout(() => setEditSuccess(false), 2500);
  };

  /* ── Delete Sample ───────────────────────────── */
  const handleDeleteConfirm = () => {
    if (!deletingSample) return;

    const isDefault = !deletingSample.isCustom;
    let updated: Sample[];

    if (isDefault) {
      // Mark default as deleted by adding a deletion record
      const deletionRecord: Sample = {
        id: `deleted_${deletingSample.id}`,
        title: '__DELETED__',
        category: deletingSample.category,
        mediaType: 'image',
        url: '',
        isCustom: true,
      };
      updated = [...customSamples, deletionRecord];
    } else {
      updated = customSamples.filter(s => s.id !== deletingSample.id);
    }

    setCustomSamples(updated);
    saveCustom(pack, updated);
    setDeletingSample(null);
  };

  // Filter out deleted default samples
  const deletedIds = new Set(
    customSamples
      .filter(s => s.title === '__DELETED__')
      .map(s => s.id.replace('deleted_', ''))
  );

  // Render sample card
  const renderSampleCard = (sample: Sample) => {
    if (deletedIds.has(sample.id)) return null;

    const isVideo = sample.mediaType === 'video';
    const youtubeId = isVideo ? getYouTubeId(sample.url) : null;
    const vimeoId = isVideo ? getVimeoId(sample.url) : null;
    const isEmbed = youtubeId || vimeoId;

    const thumbnailSrc = sample.thumbnail || sample.url;

    return (
      <div
        key={sample.id}
        className="group relative glass-card overflow-hidden border-glow-hover"
      >
        {/* Admin controls overlay */}
        {adminUnlocked && (
          <div className="absolute top-2 right-2 z-20 flex gap-1.5">
            <button
              onClick={(e) => { e.stopPropagation(); openEditModal(sample); }}
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 border backdrop-blur-sm"
              style={{
                background: 'rgba(0,229,255,0.15)',
                borderColor: 'rgba(0,229,255,0.4)',
                color: '#00b8cc',
              }}
            >
              <Pencil size={14} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setDeletingSample(sample); }}
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 border backdrop-blur-sm"
              style={{
                background: 'rgba(239,68,68,0.15)',
                borderColor: 'rgba(239,68,68,0.4)',
                color: '#ef4444',
              }}
            >
              <Trash2 size={14} />
            </button>
          </div>
        )}

        {/* Custom badge */}
        {sample.isCustom && (
          <div className="absolute top-2 left-2 z-10">
            <span className="text-xs px-2 py-0.5 rounded bg-purple-500/20 border border-purple-500/40 text-purple-300">
              Custom
            </span>
          </div>
        )}

        {/* Video badge */}
        {isVideo && (
          <div className="absolute top-2 left-2 z-10" style={{ left: sample.isCustom ? 'auto' : '0.5rem', right: sample.isCustom ? 'auto' : undefined }}>
            {sample.isCustom && <div className="w-12"></div>}
            <span className="text-xs px-2 py-0.5 rounded bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 flex items-center gap-1">
              <Video size={10} />
              Video
            </span>
          </div>
        )}

        {/* Media preview */}
        <div
          className="aspect-video relative overflow-hidden cursor-pointer"
          onClick={() => {
            if (isVideo && isEmbed) {
              setLightboxVideo(sample.url);
            } else if (isVideo) {
              setLightboxVideo(sample.url);
            } else {
              setLightboxImg(sample.url);
            }
          }}
        >
          {isVideo ? (
            <>
              <img
                src={thumbnailSrc}
                alt={sample.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                onError={e => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x225?text=Video'; }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-cyan-500/90 flex items-center justify-center shadow-lg">
                  <Play size={24} className="text-navy-950 ml-1" fill="currentColor" />
                </div>
              </div>
            </>
          ) : (
            <img
              src={sample.url}
              alt={sample.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          )}

          <div
            className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 flex items-center justify-center"
            style={{ background: 'rgba(5,8,22,0.55)' }}
          >
            <div
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border border-cyan-500/50 text-cyan-400"
              style={{ background: 'rgba(0,229,255,0.12)' }}
            >
              {isVideo ? <Play size={14} /> : <Eye size={14} />}
              {isVideo ? 'Play Video' : 'View Full'}
            </div>
          </div>
        </div>

        {/* Card body */}
        <div className="p-4">
          <h3 className="font-semibold font-poppins text-sm truncate" style={{ color: 'var(--clr-text)' }}>
            {sample.title}
          </h3>
          <span
            className="text-xs mt-0.5 inline-block"
            style={{ color: 'var(--clr-text-faint)' }}
          >
            {sample.category}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen relative" style={{ background: 'var(--clr-bg)' }}>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-4">
        {/* Back */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 transition-colors group mb-8 text-sm font-medium hover:text-cyan-500"
          style={{ color: 'var(--clr-text-muted)' }}
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <B en="Back to Home" si="නිවසට ආපසු" />
        </button>

        {/* Page header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
            <div>
              <p className="section-label inline-flex mb-3">
                <B en="Sample Gallery" si="නියැදි ගැලරිය" />
              </p>
              <h1 className="text-3xl md:text-4xl font-bold font-poppins mb-2" style={{ color: 'var(--clr-text)' }}>
                {packName}
              </h1>
              <p className="text-sm" style={{ color: 'var(--clr-text-muted)' }}>{meta.desc}</p>
            </div>

            {/* Admin: Add button or login */}
            <div className="flex items-center gap-2 self-start">
              {adminUnlocked ? (
                <>
                  <button
                    onClick={() => {
                      setAddCategory('Web');
                      setShowAdminModal(true);
                    }}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl btn-primary text-sm"
                  >
                    <Plus size={16} />
                    Add Sample
                  </button>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm border transition-all duration-300 hover:bg-red-500/10 hover:border-red-500/40 hover:text-red-400"
                    style={{ borderColor: 'var(--clr-border)', color: 'var(--clr-text-muted)' }}
                  >
                    <LogOut size={15} />
                  </button>
                </>
              ) : null}
            </div>
          </div>

          {/* Pack selector */}
          <div className="flex flex-wrap gap-2 mb-6">
            {(['starter', 'growth', 'dominate'] as Pack[]).map(p => (
              <button
                key={p}
                onClick={() => navigate(`/samples/${p}`)}
                className="px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 border"
                style={pack === p ? {
                  background: 'rgba(0,229,255,0.15)',
                  borderColor: 'rgba(0,229,255,0.5)',
                  color: '#00b8cc',
                } : {
                  background: 'var(--clr-bg-card)',
                  borderColor: 'var(--clr-border)',
                  color: 'var(--clr-text-muted)',
                }}
              >
                {lang === 'en' ? PACK_META[p].enName : PACK_META[p].siName}
              </button>
            ))}
          </div>
        </div>

        {/* ── CATEGORY SECTIONS ─────────────────────── */}
        {CATEGORIES.map(category => {
          const samples = samplesByCategory[category].filter(s => !deletedIds.has(s.id));
          if (samples.length === 0 && !adminUnlocked) return null;

          return (
            <div key={category} className="mb-12">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-xl font-bold font-poppins" style={{ color: 'var(--clr-text)' }}>
                  {category}
                </h2>
                {adminUnlocked && (
                  <button
                    onClick={() => openAddForCategory(category)}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 border"
                    style={{
                      background: 'rgba(0,229,255,0.1)',
                      borderColor: 'rgba(0,229,255,0.35)',
                      color: '#00b8cc',
                    }}
                  >
                    <Plus size={14} />
                    Add {category}
                  </button>
                )}
              </div>

              {samples.length === 0 ? (
                <div className="text-center py-10 rounded-xl border-2 border-dashed" style={{ borderColor: 'var(--clr-border)', color: 'var(--clr-text-faint)' }}>
                  <ImageIcon size={32} className="mx-auto mb-3 opacity-40" />
                  <p className="text-sm">No {category} samples yet.</p>
                  {adminUnlocked && (
                    <button
                      onClick={() => openAddForCategory(category)}
                      className="mt-3 text-xs text-cyan-500 hover:underline"
                    >
                      Add the first sample
                    </button>
                  )}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {samples.map(renderSampleCard)}
                </div>
              )}
            </div>
          );
        })}

        {/* Empty state */}
        {CATEGORIES.every(c => samplesByCategory[c].filter(s => !deletedIds.has(s.id)).length === 0) && (
          <div className="text-center py-20" style={{ color: 'var(--clr-text-faint)' }}>
            <ImageIcon size={40} className="mx-auto mb-4 opacity-30" />
            <p>No samples in this package.</p>
          </div>
        )}

        {/* CTA */}
        <div className="text-center pb-16">
          <p className="text-sm mb-4" style={{ color: 'var(--clr-text-muted)' }}>
            <B en="Ready to get started with this package?" si="මෙම පැකේජය සමඟ ආරම්භ කිරීමට සූදානම්ද?" />
          </p>
          <a
            href={`https://wa.me/94752520376?text=${encodeURIComponent(`Hi Moonbox Digital! I want the ${meta.enName}.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex text-sm"
          >
            <ExternalLink size={15} />
            <B en="Buy This Package" si="මෙම පැකේජය මිලදී ගන්න" />
          </a>
        </div>
      </div>

      {/* Footer with Manager Login button */}
      <footer
        className="relative z-10 py-5 px-4 border-t"
        style={{ borderColor: 'var(--clr-border)', background: 'var(--clr-bg-card)' }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <p className="text-xs" style={{ color: 'var(--clr-text-faint)' }}>
            &copy; {new Date().getFullYear()} Moonbox Digital
          </p>
          <button
            onClick={() => {
              if (adminUnlocked) {
                setShowAdminModal(true);
              } else {
                setShowPasswordPrompt(true);
              }
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-300 border"
            style={{
              background: adminUnlocked ? 'rgba(0,229,255,0.1)' : 'var(--clr-bg-card)',
              borderColor: adminUnlocked ? 'rgba(0,229,255,0.4)' : 'var(--clr-border)',
              color: adminUnlocked ? '#00b8cc' : 'var(--clr-text-muted)',
            }}
          >
            {adminUnlocked
              ? <><Unlock size={14} className="text-cyan-500" /> Manager Panel</>
              : <><Lock size={14} /> Manager Login</>
            }
          </button>
        </div>
      </footer>

      {/* ── PASSWORD PROMPT MODAL ────────────────── */}
      {showPasswordPrompt && !adminUnlocked && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0"
            style={{ background: 'rgba(5,8,22,0.75)', backdropFilter: 'blur(8px)' }}
            onClick={() => { setShowPasswordPrompt(false); setPwError(false); setPwValue(''); }}
          />
          <div className="relative z-10 w-full max-w-sm glass-card p-8 shadow-2xl">
            <button
              onClick={() => { setShowPasswordPrompt(false); setPwError(false); setPwValue(''); }}
              className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
              style={{ background: 'var(--clr-bg-card)', color: 'var(--clr-text-muted)' }}
            >
              <X size={16} />
            </button>

            <div className="flex flex-col items-center text-center gap-4 mb-6">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center border"
                style={{ background: 'rgba(0,229,255,0.1)', borderColor: 'rgba(0,229,255,0.3)' }}
              >
                <Shield size={26} className="text-cyan-500" />
              </div>
              <div>
                <h3 className="font-bold text-lg font-poppins" style={{ color: 'var(--clr-text)' }}>
                  Manager Login
                </h3>
                <p className="text-sm mt-1" style={{ color: 'var(--clr-text-muted)' }}>
                  Enter password to access gallery editor
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <input
                type="password"
                value={pwValue}
                onChange={e => { setPwValue(e.target.value); setPwError(false); }}
                onKeyDown={e => e.key === 'Enter' && attemptUnlock()}
                placeholder="Manager password"
                autoFocus
                className="input-field"
                style={pwError ? { borderColor: 'rgba(239,68,68,0.6)' } : {}}
              />
              {pwError && (
                <p className="text-red-400 text-xs bg-red-500/10 border border-red-500/20 px-3 py-2 rounded-lg">
                  Incorrect password. Try again.
                </p>
              )}
              <button onClick={attemptUnlock} className="btn-primary w-full justify-center py-3 text-sm">
                Unlock Gallery Editor
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── ADD SAMPLE MODAL ─────────────────────── */}
      {adminUnlocked && showAdminModal && (
        <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-[10vh] overflow-y-auto">
          <div
            className="absolute inset-0"
            style={{ background: 'rgba(5,8,22,0.7)', backdropFilter: 'blur(8px)' }}
            onClick={() => setShowAdminModal(false)}
          />
          <div
            className="relative z-10 w-full max-w-2xl glass-card p-8 shadow-2xl mb-8"
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center border"
                  style={{ background: 'rgba(0,229,255,0.1)', borderColor: 'rgba(0,229,255,0.3)' }}
                >
                  <Plus size={20} className="text-cyan-500" />
                </div>
                <div>
                  <h3 className="font-bold text-lg font-poppins" style={{ color: 'var(--clr-text)' }}>
                    Add New Sample
                  </h3>
                  <p className="text-xs" style={{ color: 'var(--clr-text-faint)' }}>
                    {PACK_META[pack].enName} - {addCategory}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowAdminModal(false)}
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors border"
                style={{ background: 'var(--clr-bg-card)', borderColor: 'var(--clr-border)', color: 'var(--clr-text-muted)' }}
              >
                <X size={16} />
              </button>
            </div>

            {/* Inputs */}
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              {/* Title */}
              <div className="sm:col-span-2">
                <label className="block text-xs font-medium mb-1.5 font-inter" style={{ color: 'var(--clr-text-muted)' }}>
                  Sample Title <span className="text-cyan-500">*</span>
                </label>
                <input
                  type="text"
                  value={addTitle}
                  onChange={e => { setAddTitle(e.target.value); setAddError(''); }}
                  placeholder="e.g. Restaurant Landing Page"
                  className="input-field"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-xs font-medium mb-1.5 font-inter" style={{ color: 'var(--clr-text-muted)' }}>
                  Category
                </label>
                <select
                  value={addCategory}
                  onChange={e => setAddCategory(e.target.value as Category)}
                  className="input-field"
                >
                  {CATEGORIES.map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              {/* Media Type */}
              <div>
                <label className="block text-xs font-medium mb-1.5 font-inter" style={{ color: 'var(--clr-text-muted)' }}>
                  Asset Type
                </label>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setAddMediaType('image')}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-xs font-semibold transition-all border"
                    style={addMediaType === 'image' ? {
                      background: 'rgba(0,229,255,0.15)',
                      borderColor: 'rgba(0,229,255,0.5)',
                      color: '#00b8cc',
                    } : {
                      background: 'var(--clr-bg-card)',
                      borderColor: 'var(--clr-border)',
                      color: 'var(--clr-text-muted)',
                    }}
                  >
                    <ImageIcon size={14} />
                    Image
                  </button>
                  <button
                    type="button"
                    onClick={() => setAddMediaType('video')}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-xs font-semibold transition-all border"
                    style={addMediaType === 'video' ? {
                      background: 'rgba(0,229,255,0.15)',
                      borderColor: 'rgba(0,229,255,0.5)',
                      color: '#00b8cc',
                    } : {
                      background: 'var(--clr-bg-card)',
                      borderColor: 'var(--clr-border)',
                      color: 'var(--clr-text-muted)',
                    }}
                  >
                    <Video size={14} />
                    Video
                  </button>
                </div>
              </div>

              {/* URL Input */}
              <div className="sm:col-span-2">
                <label className="block text-xs font-medium mb-1.5 font-inter" style={{ color: 'var(--clr-text-muted)' }}>
                  {addMediaType === 'video' ? 'Video URL (YouTube, Vimeo, or MP4)' : 'Image URL'} <span className="text-cyan-500">*</span>
                </label>
                <input
                  type="url"
                  value={addUrl}
                  onChange={e => { setAddUrl(e.target.value); setAddError(''); }}
                  placeholder={addMediaType === 'video' ? 'https://youtube.com/watch?v=... or https://vimeo.com/...' : 'https://example.com/image.jpg'}
                  className="input-field"
                />
              </div>

              {/* Video Thumbnail URL */}
              {addMediaType === 'video' && (
                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium mb-1.5 font-inter" style={{ color: 'var(--clr-text-muted)' }}>
                    Thumbnail Image URL (optional)
                  </label>
                  <input
                    type="url"
                    value={addThumbnail}
                    onChange={e => setAddThumbnail(e.target.value)}
                    placeholder="https://example.com/thumbnail.jpg"
                    className="input-field"
                  />
                </div>
              )}
            </div>

            {/* Error / Success */}
            {addError && (
              <p className="text-red-400 text-xs mb-3 bg-red-500/10 border border-red-500/20 px-3 py-2 rounded-lg">
                {addError}
              </p>
            )}
            {addSuccess && (
              <div className="flex items-center gap-2 text-cyan-400 text-xs mb-3 bg-cyan-500/10 border border-cyan-500/20 px-3 py-2 rounded-lg">
                <CheckCircle2 size={14} />
                Sample added and saved to gallery!
              </div>
            )}

            <button
              onClick={handleAddSample}
              className="btn-primary text-sm px-6 py-2.5"
            >
              <Plus size={15} />
              Save to Gallery
            </button>
          </div>
        </div>
      )}

      {/* ── EDIT SAMPLE MODAL ─────────────────────── */}
      {editingSample && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0"
            style={{ background: 'rgba(5,8,22,0.7)', backdropFilter: 'blur(8px)' }}
            onClick={() => setEditingSample(null)}
          />
          <div
            className="relative z-10 w-full max-w-lg glass-card p-6 shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-bold text-lg font-poppins" style={{ color: 'var(--clr-text)' }}>
                Edit Sample
              </h3>
              <button
                onClick={() => setEditingSample(null)}
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors border"
                style={{ background: 'var(--clr-bg-card)', borderColor: 'var(--clr-border)', color: 'var(--clr-text-muted)' }}
              >
                <X size={14} />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium mb-1.5" style={{ color: 'var(--clr-text-muted)' }}>
                  Title <span className="text-cyan-500">*</span>
                </label>
                <input
                  type="text"
                  value={editTitle}
                  onChange={e => { setEditTitle(e.target.value); setEditError(''); }}
                  className="input-field"
                />
              </div>

              <div>
                <label className="block text-xs font-medium mb-1.5" style={{ color: 'var(--clr-text-muted)' }}>
                  Asset Type
                </label>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setEditMediaType('image')}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold transition-all border"
                    style={editMediaType === 'image' ? {
                      background: 'rgba(0,229,255,0.15)',
                      borderColor: 'rgba(0,229,255,0.5)',
                      color: '#00b8cc',
                    } : {
                      background: 'var(--clr-bg-card)',
                      borderColor: 'var(--clr-border)',
                      color: 'var(--clr-text-muted)',
                    }}
                  >
                    <ImageIcon size={14} />
                    Image
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditMediaType('video')}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold transition-all border"
                    style={editMediaType === 'video' ? {
                      background: 'rgba(0,229,255,0.15)',
                      borderColor: 'rgba(0,229,255,0.5)',
                      color: '#00b8cc',
                    } : {
                      background: 'var(--clr-bg-card)',
                      borderColor: 'var(--clr-border)',
                      color: 'var(--clr-text-muted)',
                    }}
                  >
                    <Video size={14} />
                    Video
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium mb-1.5" style={{ color: 'var(--clr-text-muted)' }}>
                  URL <span className="text-cyan-500">*</span>
                </label>
                <input
                  type="url"
                  value={editUrl}
                  onChange={e => { setEditUrl(e.target.value); setEditError(''); }}
                  className="input-field"
                />
              </div>

              {editMediaType === 'video' && (
                <div>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: 'var(--clr-text-muted)' }}>
                    Thumbnail URL (optional)
                  </label>
                  <input
                    type="url"
                    value={editThumbnail}
                    onChange={e => setEditThumbnail(e.target.value)}
                    className="input-field"
                  />
                </div>
              )}
            </div>

            {editError && (
              <p className="text-red-400 text-xs mt-3 bg-red-500/10 border border-red-500/20 px-3 py-2 rounded-lg">
                {editError}
              </p>
            )}

            {editSuccess && (
              <div className="flex items-center gap-2 text-cyan-400 text-xs mt-3 bg-cyan-500/10 border border-cyan-500/20 px-3 py-2 rounded-lg">
                <CheckCircle2 size={14} />
                Sample updated successfully!
              </div>
            )}

            <div className="flex gap-3 mt-5">
              <button
                onClick={() => setEditingSample(null)}
                className="flex-1 py-2.5 rounded-xl text-sm font-medium border transition-colors"
                style={{ borderColor: 'var(--clr-border)', color: 'var(--clr-text-muted)' }}
              >
                Cancel
              </button>
              <button
                onClick={handleEditSample}
                className="flex-1 btn-primary py-2.5 text-sm"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── DELETE CONFIRMATION MODAL ────────────── */}
      {deletingSample && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0"
            style={{ background: 'rgba(5,8,22,0.7)', backdropFilter: 'blur(8px)' }}
            onClick={() => setDeletingSample(null)}
          />
          <div
            className="relative z-10 w-full max-w-sm glass-card p-6 shadow-2xl text-center"
            onClick={e => e.stopPropagation()}
          >
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.3)' }}
            >
              <AlertTriangle size={26} className="text-red-400" />
            </div>
            <h3 className="font-bold text-lg font-poppins mb-2" style={{ color: 'var(--clr-text)' }}>
              Delete Sample?
            </h3>
            <p className="text-sm mb-5" style={{ color: 'var(--clr-text-muted)' }}>
              Are you sure you want to delete "<span className="font-medium">{deletingSample.title}</span>"? This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setDeletingSample(null)}
                className="flex-1 py-2.5 rounded-xl text-sm font-medium border transition-colors"
                style={{ borderColor: 'var(--clr-border)', color: 'var(--clr-text-muted)' }}
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteConfirm}
                className="flex-1 py-2.5 rounded-xl text-sm font-semibold bg-red-500 text-white hover:bg-red-400 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── LIGHTBOX (Image) ────────────────────────── */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(4px)' }}
          onClick={() => setLightboxImg(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            onClick={() => setLightboxImg(null)}
          >
            <X size={20} className="text-white" />
          </button>
          <img
            src={lightboxImg}
            alt="Sample preview"
            className="max-w-full max-h-[90vh] rounded-xl shadow-2xl object-contain"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}

      {/* ── LIGHTBOX (Video) ────────────────────────── */}
      {lightboxVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(4px)' }}
          onClick={() => setLightboxVideo(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
            onClick={() => setLightboxVideo(null)}
          >
            <X size={20} className="text-white" />
          </button>
          <div className="w-full max-w-4xl" onClick={e => e.stopPropagation()}>
            {getYouTubeId(lightboxVideo) ? (
              <iframe
                src={`https://www.youtube.com/embed/${getYouTubeId(lightboxVideo)}?autoplay=1`}
                className="w-full aspect-video rounded-xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : getVimeoId(lightboxVideo) ? (
              <iframe
                src={`https://player.vimeo.com/video/${getVimeoId(lightboxVideo)}?autoplay=1`}
                className="w-full aspect-video rounded-xl"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <video
                src={lightboxVideo}
                controls
                autoPlay
                className="w-full max-h-[85vh] rounded-xl"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
