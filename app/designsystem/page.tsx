import React from 'react';
import { Button } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { Eyebrow } from '@/components/ui/eyebrow';
import { Section, Container } from '@/components/ui/layout';
import { ArrowRight, ArrowLeft, X, Plus, Check, Play } from 'lucide-react';
import Image from 'next/image';

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-ivory-mist-50 text-carbon-black-900 pb-32">
      {/* Header */}
      <header className="pt-32 pb-16 px-8 md:px-16 border-b border-carbon-black-900/10">
        <Container>
          <Eyebrow variant="muted" className="mb-6 block">Internal Documentation</Eyebrow>
          <Heading level="h1" className="mb-8">Button System</Heading>
          <Text variant="body" className="max-w-2xl text-carbon-black-600">
            A refined, structured, and editorial button library for Reclamation Method. 
            Built with Libre Franklin, these components prioritize calm precision over loud interaction.
          </Text>
        </Container>
      </header>

      <main className="max-w-7xl mx-auto px-8 md:px-16 pt-24 space-y-32">
        
        {/* Variants */}
        <section>
          <div className="mb-12">
            <Heading level="h3" className="mb-4">Variants & Hierarchy</Heading>
            <Text variant="support" className="max-w-xl">
              The core button styles. Primary is the strongest action, followed by secondary and tertiary. 
              Outlined provides strong presence without visual weight, while ghost and link are for minimal editorial contexts.
            </Text>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-end">
            <div className="flex flex-col gap-4">
              <span className="text-[10px] uppercase tracking-widest text-carbon-black-500">Primary</span>
              <Button variant="primary">Primary Action</Button>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-[10px] uppercase tracking-widest text-carbon-black-500">Secondary</span>
              <Button variant="secondary">Secondary</Button>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-[10px] uppercase tracking-widest text-carbon-black-500">Tertiary</span>
              <Button variant="tertiary">Tertiary</Button>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-[10px] uppercase tracking-widest text-carbon-black-500">Outlined</span>
              <Button variant="outlined">Outlined</Button>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-[10px] uppercase tracking-widest text-carbon-black-500">Ghost</span>
              <Button variant="ghost">Ghost Button</Button>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-[10px] uppercase tracking-widest text-carbon-black-500">Link</span>
              <Button variant="link">Text Link</Button>
            </div>
          </div>
        </section>

        {/* Sizes */}
        <section>
          <div className="mb-12">
            <Heading level="h3" className="mb-4">Sizes</Heading>
            <Text variant="support" className="max-w-xl">
              Available in small, medium (default), and large. The padding and typography scale proportionally to maintain the editorial structure.
            </Text>
          </div>
          
          <div className="flex flex-wrap items-end gap-12">
            <div className="flex flex-col gap-4">
              <span className="text-[10px] uppercase tracking-widest text-carbon-black-500">Small</span>
              <Button variant="primary" size="sm">Small Button</Button>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-[10px] uppercase tracking-widest text-carbon-black-500">Medium (Default)</span>
              <Button variant="primary" size="md">Medium Button</Button>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-[10px] uppercase tracking-widest text-carbon-black-500">Large</span>
              <Button variant="primary" size="lg">Large Button</Button>
            </div>
          </div>
        </section>

        {/* States */}
        <section>
          <div className="mb-12">
            <Heading level="h3" className="mb-4">Interactive States</Heading>
            <Text variant="support" className="max-w-xl">
              Demonstrating how the primary button behaves across different interaction states.
            </Text>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-end">
            <div className="flex flex-col gap-4">
              <span className="text-[10px] uppercase tracking-widest text-carbon-black-500">Default</span>
              <Button variant="primary">Default State</Button>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-[10px] uppercase tracking-widest text-carbon-black-500">Hover</span>
              <Button variant="primary" className="bg-[#1a1715]">Hover State</Button>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-[10px] uppercase tracking-widest text-carbon-black-500">Active</span>
              <Button variant="primary" className="bg-black">Active State</Button>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-[10px] uppercase tracking-widest text-carbon-black-500">Focus</span>
              <Button variant="primary" className="ring-1 ring-carbon-black-900 ring-offset-2 ring-offset-ivory-mist-50">Focus State</Button>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-[10px] uppercase tracking-widest text-carbon-black-500">Disabled</span>
              <Button variant="primary" disabled>Disabled State</Button>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-[10px] uppercase tracking-widest text-carbon-black-500">Loading</span>
              <Button variant="primary" isLoading>Processing</Button>
            </div>
          </div>
        </section>

        {/* Icon Buttons */}
        <section>
          <div className="mb-12">
            <Heading level="h3" className="mb-4">Icons & Utility</Heading>
            <Text variant="support" className="max-w-xl">
              For directional controls, utility actions, or adding visual cues to labels.
            </Text>
          </div>
          
          <div className="flex flex-wrap items-end gap-12">
            <div className="flex flex-col gap-4">
              <span className="text-[10px] uppercase tracking-widest text-carbon-black-500">Icon Only (Primary)</span>
              <Button variant="primary" size="icon" aria-label="Play">
                <Play className="w-4 h-4 fill-current" />
              </Button>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-[10px] uppercase tracking-widest text-carbon-black-500">Icon Only (Outlined)</span>
              <Button variant="outlined" size="icon" aria-label="Next">
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-[10px] uppercase tracking-widest text-carbon-black-500">Icon Only (Ghost)</span>
              <Button variant="ghost" size="icon" aria-label="Close">
                <X className="w-5 h-5" />
              </Button>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-[10px] uppercase tracking-widest text-carbon-black-500">Label + Icon Right</span>
              <Button variant="primary">
                Read the Manifesto <ArrowRight className="ml-3 w-4 h-4" />
              </Button>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-[10px] uppercase tracking-widest text-carbon-black-500">Icon Left + Label</span>
              <Button variant="outlined">
                <Check className="mr-3 w-4 h-4" /> Applied
              </Button>
            </div>
          </div>
        </section>

        {/* Contextual Usage */}
        <section>
          <div className="mb-12">
            <Heading level="h3" className="mb-4">Contextual Usage</Heading>
            <Text variant="support" className="max-w-xl">
              How the button system adapts to different backgrounds and environments.
            </Text>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Light Background */}
            <div className="bg-antique-white-50 p-12 flex flex-col items-center justify-center gap-6 border border-carbon-black-900/5">
              <span className="text-[10px] uppercase tracking-widest text-carbon-black-500 mb-4">On Light Background</span>
              <Button variant="primary">Primary Action</Button>
              <Button variant="outlined">Secondary Action</Button>
              <Button variant="link">Learn More</Button>
            </div>

            {/* Dark Background */}
            <div className="bg-[#1a1715] p-12 flex flex-col items-center justify-center gap-6">
              <span className="text-[10px] uppercase tracking-widest text-ivory-mist-500 mb-4">On Dark Background</span>
              {/* Note: In a real app, you might need inverted variants or use specific classes for dark mode. Here we simulate the inverted look. */}
              <Button className="bg-ivory-mist-50 text-[#1a1715] hover:bg-ivory-mist-200">Primary Action</Button>
              <Button className="bg-transparent border border-ivory-mist-50/30 text-ivory-mist-50 hover:bg-ivory-mist-50 hover:text-[#1a1715]">Secondary Action</Button>
              <Button className="bg-transparent text-ivory-mist-50 underline-offset-[6px] hover:underline p-0 h-auto">Learn More</Button>
            </div>

            {/* Image Background */}
            <div className="relative p-12 flex flex-col items-center justify-center gap-6 overflow-hidden">
              <div className="absolute inset-0 z-0">
                <Image 
                  src="https://static.showit.co/800/0zC2t_ftghvmEOnXvylxKg/65205/pablo-merchan-montes-lpyavwjqhac-unsplash.jpg" 
                  alt="Background context" 
                  fill 
                  className="object-cover opacity-80" 
                />
                <div className="absolute inset-0 bg-carbon-black-950/60" />
              </div>
              <div className="relative z-10 flex flex-col items-center gap-6 w-full">
                <span className="text-[10px] uppercase tracking-widest text-ivory-mist-200 mb-4">On Image Context</span>
                <Button className="bg-ivory-mist-50 text-[#1a1715] hover:bg-ivory-mist-200 w-full">Begin the Method</Button>
                <Button className="bg-transparent border border-ivory-mist-50/50 text-ivory-mist-50 hover:bg-ivory-mist-50 hover:text-[#1a1715] backdrop-blur-sm w-full">View Schedule</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Usage Notes */}
        <section className="border-t border-carbon-black-900/10 pt-16">
          <Heading level="h3" className="mb-8">Usage Notes</Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="font-sans font-medium text-sm uppercase tracking-widest mb-4">Typography</h4>
              <Text variant="support" className="mb-4">
                All buttons use <strong>Libre Franklin</strong>, set in uppercase with a tracking of <code>0.15em</code>. 
                This creates a structured, architectural feel that contrasts nicely with the organic serif headings used throughout the site.
              </Text>
              <Text variant="support">
                Font weights are kept at <code>medium</code> (500) to ensure legibility without becoming too heavy or "shouty".
              </Text>
            </div>
            <div>
              <h4 className="font-sans font-medium text-sm uppercase tracking-widest mb-4">Shape & Form</h4>
              <Text variant="support" className="mb-4">
                Buttons feature a subtle <code>rounded-[7px]</code> border radius. This softens the edges just enough to feel approachable while maintaining a sophisticated, editorial elegance.
              </Text>
              <Text variant="support">
                Hover states are subtle—usually a slight darkening of the background or an inversion of colors for outlined buttons. We avoid glossy effects, heavy shadows, or bouncy animations.
              </Text>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
