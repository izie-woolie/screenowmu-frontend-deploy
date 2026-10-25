import { Button, Card, ProgressBar, Spinner } from "@heroui/react";
import type { ReactNode } from "react";
import { useLocation } from "react-router";
import { progressFor } from "../utils/Steps";
import AutoCarousel from "./AutoCarousel";
import TahukahAndaBanner from "./TahukahAndaBanner";

interface StepShellProps {
  title: string;
  subtitle: string;
  children: ReactNode;
  nextLabel?: string;
  nextDisabled?: boolean;
  showBack?: boolean;
  showFooter?: boolean;
  loading?: boolean;
  /** Show the rotating "Tahukah Anda?" fact banner instead of the intro
   * AutoCarousel. Used from the Demo Profile step onward (survey,
   * dependence, readiness pages), matching the original slide design. */
  showFacts?: boolean;
  onBack: () => void;
  onNext: () => void;
}
function StepShell({
  title,
  subtitle,
  children,
  onBack,
  onNext,
  nextLabel = "Seterusnya →",
  nextDisabled = false,
  showBack = true,
  showFooter = true,
  loading = false,
  showFacts = false,
}: StepShellProps) {
  const { pathname } = useLocation();
  const progress: number = progressFor(pathname);

  return (
    <div className="min-h-screen bg-stone-50 flex justify-center">
      <Card className="w-full max-w-xl">
        <div className="flex justify-center w-full">
          <img
            src="/banner.png"
            alt="ScreeNowMU"
            className="mt-4 ml-4 w-48 object-contain"
          />
        </div>
        {showFacts ? <TahukahAndaBanner /> : <AutoCarousel />}
        <ProgressBar
          aria-label="Proses"
          size="lg"
          value={progress}
          className="pt-2"
        >
          <ProgressBar.Track>
            <ProgressBar.Fill className="bg-red-300" />
          </ProgressBar.Track>
        </ProgressBar>
        <Card.Header className="flex flex-col items-start gap-1 px-7 pt-5 pb-0">
          <span className="text-[11px] font-semibold tracking-widest uppercase text-red-700">
            ScreeNowMU · Saringan Merokok
          </span>
          <h1 className="text-2xl font-semibold leading-snug text-stone-900">
            {title}
          </h1>
          {subtitle && <p className="text-sm text-stone-500">{subtitle}</p>}
        </Card.Header>

        <Card.Content>{children}</Card.Content>

        {showFooter && (
          <Card.Footer className="flex justify-between border-t border-stone-200 px-7 py-4">
            {showBack ? (
              <Button
                variant="danger-soft"
                onPress={onBack}
                isDisabled={loading}
              >
                ← Kembali
              </Button>
            ) : (
              <span />
            )}
            <Button
              variant="danger-soft"
              onPress={onNext}
              isDisabled={nextDisabled}
              isPending={loading}
            >
              {({ isPending }) => (
                <>
                  {isPending ? (
                    <Spinner color="current" size="sm" />
                  ) : (
                    <p>{nextLabel}</p>
                  )}
                </>
              )}
            </Button>
          </Card.Footer>
        )}
      </Card>
    </div>
  );
}

export default StepShell;
