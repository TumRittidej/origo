import { useState, type FC } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import FullLogoWhite from '@/assets/full_logo_white.png'

import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Form, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { cn } from '@/lib/utils'
import { Textarea } from '@/components/ui/textarea'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { descriptionByStep, quizQuestions } from '@/constants/quiz'
import { defaultQuizSchema, quizSchema } from './schema'
import type { QuizFormValues } from './@types'
import { useNavigate } from 'react-router-dom'
import { route } from '@/constants/routing'
import Container from '@/components/container'

const QuizPage: FC = () => {
  const navigate = useNavigate()

  const [step, setStep] = useState(0)
  const [showInterstitial, setShowInterstitial] = useState(false)

  const form = useForm<QuizFormValues>({
    resolver: zodResolver(quizSchema),
    defaultValues: defaultQuizSchema,
    shouldUnregister: false,
    mode: 'onChange'
  })

  const total = quizQuestions.length
  const safeStep = Math.min(Math.max(step, 0), total - 1)
  const current = quizQuestions[safeStep]
  if (!current) return null

  const progress = ((safeStep + 1) / total) * 100

  const goBack = () => {
    if (safeStep > 0) setStep((s) => s - 1)
  }

  const onSubmit = (values: QuizFormValues) => {
    console.log('Quiz Result:', values)
    navigate(route.result())
  }

  return (
    <>
      {!showInterstitial && (
        <Container className="pt-12">
          <Progress value={progress} />
          <div className="text-sm flex justify-between w-full mt-4 mb-4">
            <div className="text-white/60 text-xs">ความคืบหน้า</div>
            <span className="text-secondary-color font-semibold">
              {Math.round(progress)}%
            </span>
          </div>
        </Container>
      )}
      <div className="flex mx-auto w-full max-w-2xl flex-col justify-center">
        {showInterstitial ? (
          <div
            key={current.id}
            className="animate-fade-in-up flex items-center px-8 justify-center flex-col h-screen"
          >
            <div className="mb-4 w-30 md:ml-auto">
              <img src={FullLogoWhite} />
            </div>
            <div className="relative flex bg-primary w-full flex-col gap-6 rounded-3xl border border-secondary-color/20 p-10 shadow-[0_0_40px_rgba(255,179,71,0.15)] hover:shadow-[0_0_60px_rgba(255,179,71,0.25)] transition-all duration-500">
              <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light">
                {descriptionByStep?.[step] ?? ''}
              </p>
            </div>
            <div className="flex justify-center pt-8">
              <Button
                variant="default"
                size="icon"
                onClick={() => {
                  setShowInterstitial(false)
                  setStep((s) => s + 1)
                }}
                className="rounded-full p-7 animate-scale-pop cursor-pointer"
              >
                <MdKeyboardArrowRight size={36} />
              </Button>
            </div>
          </div>
        ) : (
          <div className="pt-12 px-5 pb-10">
            <Form {...form} key={current.id}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div key={current.id} className="animate-fade-in-up">
                  <div className="mb-4 w-30 mx-auto">
                    <img src={FullLogoWhite} />
                  </div>
                  <FormField
                    control={form.control}
                    name={current.id as keyof QuizFormValues}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xl md:text-3xl font-semibold pb-6">
                          {current.title}
                        </FormLabel>
                        {current.type === 'choice' && (
                          <div className="space-y-6 mt-4">
                            {current.options.map((option) => {
                              const active = field.value === option

                              return (
                                <div
                                  key={option}
                                  role="button"
                                  tabIndex={0}
                                  onClick={() => {
                                    form.setValue(
                                      current.id as keyof QuizFormValues,
                                      option,
                                      {
                                        shouldDirty: true,
                                        shouldTouch: true,
                                        shouldValidate: true
                                      }
                                    )

                                    if ([2, 7, 11].includes(safeStep)) {
                                      setShowInterstitial(true)
                                    } else if (safeStep < total - 1) {
                                      setStep((s) => s + 1)
                                    }
                                  }}
                                  className={cn(
                                    'text-white/80 rounded-xl border border-white/20 p-4 cursor-pointer transition bg-primary hover:border-secondary-color/80 hover:bg-white/10',
                                    active &&
                                      'border-secondary-color bg-secondary-color text-black hover:bg-secondary-color shadow-secondary-color shadow-xl/10 ring-1 ring-primary'
                                  )}
                                >
                                  {option}
                                </div>
                              )
                            })}
                          </div>
                        )}

                        {current.type === 'text' && (
                          <div className="mt-4 space-y-3">
                            <Textarea
                              {...field}
                              className="min-h-40 max-w-full"
                              placeholder="พิมพ์คำตอบของคุณที่นี่..."
                            />
                          </div>
                        )}
                      </FormItem>
                    )}
                  />

                  <div className="flex justify-between pt-6">
                    {safeStep > 0 && (
                      <Button
                        type="button"
                        size="icon"
                        variant="outline"
                        onClick={goBack}
                        className="rounded-full p-6 cursor-pointer text-white/60 border-white/20"
                      >
                        <MdKeyboardArrowLeft size={28} />
                      </Button>
                    )}

                    {safeStep === total - 1 && (
                      <Button
                        type="submit"
                        className="p-6 text-lg cursor-pointer"
                      >
                        ดูผลลัพธ์
                      </Button>
                    )}
                  </div>
                </div>
              </form>
            </Form>
          </div>
        )}
      </div>
    </>
  )
}

export default QuizPage
