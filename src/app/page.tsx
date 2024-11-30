'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

interface Crop {
  name: string;
  water: number;
  fertilizer: number;
  image: string;
}

interface Result {
  water: number;
  fertilizer: number;
}

const crops: Crop[] = [
  { name: 'Alface', water: 900, fertilizer: 100, image: '/alface.jpg' },
  { name: 'Tomate', water: 1000, fertilizer: 3000, image: '/tomate.jpg' },
]

export default function Home() {
  const [selectedCrop, setSelectedCrop] = useState<Crop>(crops[0])
  const [quantity, setQuantity] = useState<number>(1)
  const [result, setResult] = useState<Result | null>(null)

  const calculateResources = () => {
    const water = selectedCrop.water * quantity
    const fertilizer = selectedCrop.fertilizer * quantity
    setResult({ water, fertilizer })
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <CardHeader className="bg-primary text-white rounded-t-lg">
          <CardTitle className="text-3xl font-bold text-center">Agrocalculadora</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <form onSubmit={(e) => { e.preventDefault(); calculateResources(); }} className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Escolha a verdura:</h3>
              <div className="grid grid-cols-2 gap-4">
                {crops.map((crop) => (
                  <label
                    key={crop.name}
                    className={`flex flex-col items-center space-y-2 rounded-lg border-2 p-4 hover:bg-secondary hover:text-white transition-colors cursor-pointer ${
                      selectedCrop.name === crop.name ? 'border-primary bg-secondary text-white' : 'border-gray-200'
                    }`}
                  >
                    <input
                      type="radio"
                      name="crop"
                      value={crop.name}
                      checked={selectedCrop.name === crop.name}
                      onChange={() => setSelectedCrop(crop)}
                      className="sr-only"
                    />
                    <Image src={crop.image} alt={crop.name} width={100} height={100} className="rounded-full object-cover" />
                    <span className="font-medium">{crop.name}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label htmlFor="quantity" className="block text-lg font-medium text-primary mb-2">
                Quantidade de pés:
              </label>
              <input
                id="quantity"
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="w-full text-lg p-2 border rounded-md"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-accent hover:bg-accent/90 text-white text-lg py-3 px-4 rounded-md transition-colors"
            >
              Calcular
            </button>
          </form>
          {result && (
            <div className="mt-8 p-6 bg-result border-2 border-result rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-primary">Resultado:</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-md shadow">
                  <p className="text-lg font-medium text-primary">Água necessária:</p>
                  <p className="text-3xl font-bold bg-[var(--color-result-value-bg)] text-[var(--color-result-text)] p-2 rounded-md mt-2">
                    {result.water} ml
                  </p>
                </div>
                <div className="bg-white p-4 rounded-md shadow">
                  <p className="text-lg font-medium text-primary">Adubo necessário:</p>
                  <p className="text-3xl font-bold bg-[var(--color-result-value-bg)] text-[var(--color-result-text)] p-2 rounded-md mt-2">
                    {result.fertilizer} g
                  </p>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

