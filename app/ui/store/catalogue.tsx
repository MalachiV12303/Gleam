import {
  Camera,
} from '@/app/lib/definitions';

export default async function CameraCatalogue({
  cameras,
}: {
  cameras: Camera[];
}) {
  return (
    <div className="w-full">
      <h1 className={`mb-8 text-xl md:text-2xl`}>
        Catalogue
      </h1>
      <div>
        {cameras?.map((camera) => (
          <div key={camera.id}>
              <p>
                {camera.name}
              </p>
              <p>
                {camera.brand}
              </p>
              <p>
                {camera.price}
              </p>
          </div>
        ))}
      </div>
    </div>
  );
}
